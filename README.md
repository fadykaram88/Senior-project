# Senior DevOps project
# Problem Defination 

The goal of this challenge is to create a simple HTTP service with a /live endpoint, deploy it on a cloud infrastructure, and integrate it with a database. The application should respond based on the database connection status:

Well done: if the application connects successfully to the database.
Maintenance: if there is an error in the database connection.
The application should read the configuration from environment variables or a configuration file, including the PORT and DATABASE URL.


![Project Image](https://raw.githubusercontent.com/fadykaram88/Senior-project/refs/heads/main/1735731950452.jfif)

---

## Table of Contents

1. [Projects Overview](#projects-overview)
2. [Getting Started](#getting-started)
3. [Project Details](#project-details)
   - [Simple HTTP API]
   - [Terraform Infrastructure]
   - [CI/CD Pipeline]
4. [Contributing]
5. [License]

---

## Projects Overview

This repository includes the following projects:

1. **Simple HTTP API**:  A simple HTTP service with a /live endpoint, which connects to a database and checks the connection status.
2. **Terraform Infrastructure**: Infrastructure as Code (IaC) to provision cloud resources using Terraform (Azure/AWS).
3. **CI/CD Pipeline**:  A CI/CD pipeline using Jenkins to automate the testing and deployment of the service.
4. **Logging and Monitoring**: Integration with AWS CloudWatch for monitoring and logging of the application.
---

## Getting Started

To get started with this project:

1. Clone the repository:
   ```bash
   git clone https://github.com/fadykaram88/Senior-project.git
   cd Senior-project
   ```
2. Install the necessary dependencies:
    ```bash
   npm install
   ```
3. Create a .env file in the project root and define your configuration variables:
    ```bash
   PORT=3000
   DATABASE_URL=your-database-url
    ```
4. Run the application:
    ```bash
   npm start
---
5. Open your browser and navigate to
    ```bash
   http://localhost:PORT/live
---
6. Terraform the infrastructure
    ```bash
   terraform init
   terraform plan
   terraform apply
---

7. CI/CD Pipeline 
Set up a Jenkins instance and configure the pipeline with this Jenkinsfile
## Project Details
### Infrastructure and Deployment
- **Infrastructure as Code (IaC)**:
  - `Terraform is used to create AWS components and deploy the application.`
- **Deployment**:
  - `The application is deployed to AWS.`
- **Database**:
  - `The database setup is configurable. You can use any database you prefer.`
- **Scalability, Resiliency, and Security**:
  - `Design and implement the solution considering scalability, resiliency, and security.`
- **Configuration Files**:
  - `Create configuration files that define your cloud resources, networking, and database.`
- **Infrastructure Enhancements**:
  - `Add configurations to improve`
  - Scalability
  - Security
- **Logging and Monitoring**:
  - `Integrate basic logging and monitoring for the application and infrastructure. This should also be in a separate commit.`
- **CI/CD Solution**:
  - `Implement a CI/CD pipeline to automate the deployment process. Preferably use Azure DevOps or another CI/CD tool you're comfortable with.`


### Additional Features
- **Scalability**:The infrastructure is designed to be scalable to handle increased traffic.
- **Resiliency**:The system is resilient to failures with proper error handling and monitoring.
- **Monitoring**:AWS CloudWatch or any other monitoring service is integrated to track application performance.



