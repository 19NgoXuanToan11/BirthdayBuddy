import express, { Request, Response, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export const app = express();


const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request received for ${req.method} ${req.url}`);
  next();
};

app.use(loggerMiddleware);

app.post('/api/users', (req: Request, res: Response) => {
    const userData = req.body; // Assuming you are sending user data in the request body
  
    // Perform any necessary validation or processing of user data
    // For example, you might save the user data to a database
  
    // Respond with a success message or appropriate response
    res.status(200).json({ message: 'User created successfully', userData });
  });
  

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
