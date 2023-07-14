import { Injectable } from '@nestjs/common';
const redis = require("redis");

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  async lol(){
    const client = await redis.createClient({url: "redis://default:f62bae635d7b4831bf0d6ff85ccadceb@firm-kit-43136.kv.vercel-storage.com:43136"});

    await client.connect()
    client.on("error", function(error) {
      console.error(error);
    });

    client.set('framework', 'AngularJS', function(err, reply) { console.log(reply); }); 


    
  
    client.get('key', function(err, reply) { console.log(reply); }); 

    return "ok"
  }

}
