package gr.team5.sacchon;

import gr.team5.sacchon.router.CustomRouter;
import gr.team5.sacchon.security.cors.CorsFilter;
import org.restlet.Application;
import org.restlet.Component;
import org.restlet.Restlet;
import org.restlet.data.Protocol;
import org.restlet.engine.Engine;
import org.restlet.routing.Router;

import java.util.logging.Logger;

public class ApiMain extends Application {

    public static final Logger LOGGER = Engine.getLogger(ApiMain.class);

    public static void main(String[] args) throws Exception {

        LOGGER.info("Application starting...");

        Component component = new Component();
        component.getServers().add(Protocol.HTTP, 9000);
        component.getDefaultHost().attach("", new ApiMain());
        component.start();

        LOGGER.info("Web API started");
        LOGGER.info("URL: http://localhost:9000/");
    }

    public ApiMain() {

        setName("WebAPITutorial");
        setDescription("Full Web API tutorial");
    }

    @Override
    public Restlet createInboundRoot() {

        CustomRouter customRouter = new CustomRouter(this);

        Router publicRouter = customRouter.publicResources();

        CorsFilter corsFilter = new CorsFilter(this);
        return corsFilter.createCorsFilter(publicRouter);
    }
}
