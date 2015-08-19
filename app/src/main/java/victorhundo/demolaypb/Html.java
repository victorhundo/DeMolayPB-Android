package victorhundo.demolaypb;

import java.net.*;
import java.io.*;
import java.util.ArrayList;
import java.util.Iterator;


/**
 * Created by victor on 16/08/15.
 */
public class Html {

    public void getContent(String url) throws Exception {
        URL oracle = new URL(url);
        BufferedReader in = new BufferedReader(new InputStreamReader(
                oracle.openStream()));

        ArrayList<Noticia> noticias = new ArrayList();
        ArrayList<String> imgs = new ArrayList<String>();

        String inputLine;
        while ((inputLine = in.readLine()) != null) {
            String link = "", nome = "", img = "";
            Noticia noticia = new Noticia();
            if (inputLine.contains("h3") == true) {
                int gancho = 29;

                for (int i = 29; i < inputLine.length(); i++) {
                    if (inputLine.charAt(i) == '"') break;
                    link += Character.toString(inputLine.charAt(i));
                    gancho = i;
                }


                for (int j = gancho + 10; j < inputLine.length(); j++) {
                    if (inputLine.charAt(j) == '\"') break;
                    nome += Character.toString(inputLine.charAt(j));
                }

                noticia.nome = nome;
                noticia.link = link;
                noticias.add(noticia);
            }

            if (inputLine.contains("img width=\"300\"") == true) {
                for (int i = 55; i < inputLine.length(); i++) {
                    if (inputLine.charAt(i) == '\"')
                        break;
                    img += Character.toString(inputLine.charAt(i));
                }

                imgs.add(img);

            }


        }

        in.close();

        FileWriter arq = new FileWriter("file:///android_assets/scripts/teste2.json");
        PrintWriter gravarArq = new PrintWriter(arq);
        Iterator imgIt = imgs.iterator();
        Iterator noticiaIT = noticias.iterator();

        //gravarArq.print("data = '[");
        gravarArq.print("data = '[");
        while(imgIt.hasNext()) {
            //gravarArq.print("{");
            gravarArq.print("{");
            Noticia noticia = (Noticia) noticiaIT.next();
            String img = (String) imgIt.next();

            noticia.img = img;

            gravarArq.print("\"nome\":");
            gravarArq.print("\"" + noticia.nome + "\",");
            gravarArq.print("\"link\":");
            gravarArq.print("\"" + noticia.link + "\",");
            gravarArq.print("\"img\":");

            if(imgIt.hasNext())
                gravarArq.print("\"" + noticia.img + "\"},");
            else
                gravarArq.print("\"" + noticia.img + "\"}]'");

	         /*gravarArq.print("\"nome\":");
	         gravarArq.print("\""  + noticia.nome + ",");
	         gravarArq.print("\"link\":");
	         gravarArq.print("\""  + noticia.link + ",");
	         /*gravarArq.print("\"img\":");
	         gravarArq.println( "\"" + noticia.img + ",");*/
            //gravarArq.print("},");
        }
        //gravarArq.print("]'");
        arq.close();

    }
}

