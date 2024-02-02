package server.router.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RouterForwardingController {

    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public String forward() {
        return "forward:/";
    }
}
