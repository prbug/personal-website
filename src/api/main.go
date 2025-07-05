package main

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type Message struct {
	Message   string `json:"message"`
	Timestamp string `json:"timestamp"`
}

func main() {
	r := gin.Default()

	// Configure trusted proxies for security
	r.SetTrustedProxies([]string{"127.0.0.1", "::1"})

	// Enable CORS for frontend
	r.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	// Hello endpoint
	r.GET("/api/hello", func(c *gin.Context) {
		message := Message{
			Message:   "Hello from Go backend! 🚀",
			Timestamp: time.Now().Format(time.RFC3339),
		}

		c.JSON(http.StatusOK, message)
	})

	// Health check endpoint
	r.GET("/api/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":    "healthy",
			"timestamp": time.Now().Format(time.RFC3339),
			"service":   "go-gin-backend",
		})
	})

	// Root endpoint
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Go Gin Backend API",
			"endpoints": []string{
				"GET /api/hello - Get hello message",
				"GET /api/health - Health check",
			},
		})
	})

	r.Run(":8080")
}
