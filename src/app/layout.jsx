import './globals.css';
import Navber from "@/Components/Nav/Navber";

export const metadata = {
  title: "Abudllah Shayed",
  description: "The site is  Abdullah Shayed portfolio",
};

// {
// https://i.ibb.co.com/SRt3kZ7/client-Two.jpg
// https://i.ibb.co.com/dLBnBC7/me.jpg
// https://i.ibb.co.com/CsjTpxr/me2.jpg
// https://i.ibb.co.com/4Z0psBF/client-Five.jpg
// https://i.ibb.co.com/dm3x76t/client-Four.jpg
// https://i.ibb.co.com/2PFny6t/client-One.jpg
// https://i.ibb.co.com/PG4VC5z/client-Three.jpg
// }

export default function RootLayout({ children }) {
  const year=new Date().getFullYear();
  return (
    <html lang="en">
        <body style={{backgroundColor:'black',color:'#93c7f5'}}>
            <div className="App">
              <nav>
                <Navber/>
              </nav>

              <main>
                {children}
              </main>
            </div>

            <p style={{textAlign:'center',fontSize:'1rem',background:'white',color:'black',fontWeight:'bold'}}>&copy;Copyright By Developer Shayed .All Right Reserve (2021-{year}) </p>
        </body>
    </html>
  );
}
