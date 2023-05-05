import axios from "axios";

export default async function handler(req, res){
    const agentId = req.query.id;
    switch (req.method) {
        case "GET": 
          try {
            const response = await axios.get(`https://valorant-api.com/v1/agents/${agentId}`);
            const agent = response.data.data;
            return res.status(200).json({ agent });          
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: error.message })
          }
    
    
        default:
          return res.status(405).json({ message: "request method not allowed" })
      }
  }