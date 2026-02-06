HTTP (Hypertext Transfer Protocol) defines several types of requests that clients can make to servers. The most common types of HTTP requests are:

1. **GET**:
    - Used to request data from a specified resource.
    - It is a safe and idempotent method, meaning it does not change the state of the server and can be called multiple times without different outcomes.
    
2. **POST**:
    - Used to send data to the server to create or update a resource.
    - It is not idempotent, meaning that calling it multiple times may result in different outcomes (e.g., creating multiple entries).
    
3. **PUT**:
    - Used to update a resource or create a new resource if it does not exist.
    - It is idempotent, meaning that calling it multiple times with the same data will not change the outcome after the first call.
    
4. **DELETE**:
    - Used to delete a specified resource.
    - It is idempotent, meaning that calling it multiple times will have the same effect as calling it once.
    
5. **HEAD**:
    - Similar to GET, but it requests only the headers of a resource, not the body.
    - Useful for checking if a resource exists or for retrieving metadata.
    
6. **OPTIONS**:
    - Used to describe the communication options for the target resource.
    - It can be used to determine the allowed methods and other options supported by the server.
    
7. **PATCH**:
    - Used to apply partial modifications to a resource.
    - It is not necessarily idempotent, depending on the implementation.
    
8. **CONNECT**:
    - Used to establish a tunnel to the server identified by the target resource.
    - Often used for SSL (HTTPS) connections through an HTTP proxy.
    
9. **TRACE**:
    - Used to perform a message loop-back test along the path to the target resource.
    - It is primarily used for diagnostic purposes.
    

These methods are part of the HTTP/1.1 specification, and while not all servers support every method, they are widely used in web development and API design.