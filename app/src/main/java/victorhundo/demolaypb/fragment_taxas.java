package victorhundo.demolaypb;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;

/**
 * Criado por victor hugo em juhlo de 2015.
 * email: victorhundo@gmail.com
 */
public class fragment_taxas extends Fragment {
    View rootView;
    WebView myWebView;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState){

        rootView = inflater.inflate(R.layout.menu_layout, container, false);
        myWebView = (WebView)rootView.findViewById(R.id.webView1);
        myWebView.setBackgroundColor(getResources().getColor(R.color.bg_webview));
        myWebView.getSettings().setJavaScriptEnabled(true);
        myWebView.setWebViewClient(new MyWebViewClient(getActivity()));
        myWebView.loadUrl("file:///android_asset/taxas.html");
        return rootView;
    }

}



