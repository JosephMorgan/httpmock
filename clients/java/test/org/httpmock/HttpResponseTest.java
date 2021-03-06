package org.httpmock;

import org.junit.Test;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

import static com.sun.tools.internal.ws.wsdl.parser.Util.fail;
import static junit.framework.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class HttpResponseTest {
    private final HttpURLConnection connection = mock(HttpURLConnection.class);

    @Test
    public void assertStatusShouldDoNothingIfStatusCodeMatches() throws IOException {
        HttpResponse response = new HttpResponse(connection, "");
        when(connection.getResponseCode()).thenReturn(200);
        response.assertStatusIs(200);
    }

    @Test
    public void assertStatusShouldThrowIfStatusCodeNotMatch() throws IOException {
        when(connection.getResponseCode()).thenReturn(500);
        when(connection.getRequestMethod()).thenReturn("GET");
        when(connection.getURL()).thenReturn(new URL("http://localhost"));
        HttpResponse response = new HttpResponse(connection, "BODY");

        try {
            response.assertStatusIs(200);
            fail("should have thrown exception");
        } catch (RuntimeException ex) {
            assertEquals("Expected 200 status code, received 500 (GET http://localhost)\nBODY", ex.getMessage());
        }
    }
}
