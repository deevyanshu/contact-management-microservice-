package com.deevyanshu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ContatcEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ContatcEurekaApplication.class, args);
	}

}
