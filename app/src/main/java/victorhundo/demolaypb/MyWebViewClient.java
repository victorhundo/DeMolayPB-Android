package victorhundo.demolaypb;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * Criado por victor hugo em julho de 2015.
 * email: victorhundo@gmail.com
 */
public class MyWebViewClient extends WebViewClient {

    ProgressDialog dialog;
    Context activity;

    MyWebViewClient(Context activity){
        this.activity = activity;
        dialog = new ProgressDialog(activity);
    }

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        String myAlternativeURL = "http://example.com";
        if (!url.equals(myAlternativeURL)) {
            {
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                activity.startActivity(i);
            }
            return true;
        } else {
            view.loadUrl(url);
            return true;
        }
    }

   @Override
    public void onPageFinished(WebView view, final String url) { dialog.dismiss(); }

    @Override
    public void onPageStarted(WebView view, String url, Bitmap favicon) {
        dialog.show();
        dialog.getWindow().setBackgroundDrawable(new ColorDrawable(android.graphics.Color.TRANSPARENT));
        dialog.setContentView(R.layout.progressbar);
    }

}
