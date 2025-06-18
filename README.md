<p align="center">
   <picture>
     <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Qcraft-UEx/Qcraft/blob/main/docs/_images/qcraft_logo.png?raw=true" width="60%">
     <img src="https://github.com/Qcraft-UEx/Qcraft/blob/main/docs/_images/qcraft_logo.png?raw=true" width="60%" alt="QCRAFT Logo">
   </picture>
</p>

# QCRAFT Quantum Collaborative Interface  
![Python Versions](https://img.shields.io/badge/python-3.9%20|%203.10%20|%203.11%20|%203.12-blue.svg)  
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/Qcraft-UEx/QCRAFT-Quantum-Collaborative-Interface/blob/main/LICENSE)

**QCRAFT Quantum Collaborative Interface** is a quantum circuit development platform designed for real-time collaboration. It enables multiple users to **co-edit quantum circuits synchronously** through a shared visual interface. This functionality is built on a custom adaptation of the **Operational Transformation (OT)** model, tailored specifically for quantum circuits.

## Key Features

- **Real-time collaborative editing of quantum circuits**  
  Users can co-design circuits in a shared Quirk-based interface. Edits are synchronized instantly using a WebSocket-based OT protocol adapted for quantum data structures.

- **Operational Transformation for Quantum Circuits**  
  Unlike traditional OT for text, our adaptation works with quantum circuit elements—each with semantic context such as qubit state, gate type, and spatial position (row/column).

- **WebSocket Synchronization Layer**  
  Ensures low-latency, bidirectional communication and full support for the OT model, allowing efficient and scalable collaborative workflows.

- **Dual-backend Architecture**  
  Combines Django for persistent user/session management with **Spring Boot** for optimized real-time collaboration services. This separation improves scalability, maintainability, and performance.

- **Cross-platform execution**  
  Collaborative designs can be translated and executed on IBM Quantum or AWS Braket, including visual results and cost estimation.

- **Deployment as Quantum Services**  
  Circuits can be deployed in Docker containers and exposed as web services for reproducible and accessible experimentation.

## Workflow Overview

1. **Collaborative Design**: Multiple users build circuits in real time via Quirk.
2. **Synchronization**: All changes are propagated using an OT model over WebSockets.
3. **Code Translation**: Circuits are translated to Qiskit or Braket code.
4. **Execution**: Users can launch executions on AWS or IBM devices.
5. **Result Visualization**: Real-time access to execution outcomes and performance metrics.

## Repository Structure

- `frontend/`: Visual interface (Quirk + collaborative extensions)
- `backend-django/`: User/session management, API, storage
- `backend-spring/`: Real-time synchronization server (WebSocket + OT engine)
- `docker/`: Deployment environment definitions

## Demonstration

A demo video showing how to collaboratively design, deploy, and execute circuits is available here:  
🔗 [https://youtu.be/your-demo-link](https://youtu.be/your-demo-link)

## License

This project is licensed under the [MIT License](https://github.com/Qcraft-UEx/QCRAFT-Quantum-Collaborative-Interface/blob/main/LICENSE).
