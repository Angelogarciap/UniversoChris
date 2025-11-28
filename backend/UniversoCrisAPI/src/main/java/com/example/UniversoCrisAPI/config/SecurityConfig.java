package com.example.UniversoCrisAPI.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableMethodSecurity
@Configuration
public class SecurityConfig {

    private static final String[] DOCUMENTATION_OPENAPI = {
            "/docs/index.html",
            "/docs-park.html", "/docs-park/**",
            "/v3/api-docs/**",
            "/swagger-ui-custom.html", "/swagger-ui.html", "/swagger-ui/**",
            "/**.html", "/webjars/**", "/configuration/**", "/swagger-resources/**"
    };

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .formLogin(form -> form.disable())
                .httpBasic(basic -> basic.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.POST, "UniversoCrisApi/v1/users").permitAll()
                        .requestMatchers(HttpMethod.POST, "UniversoCrisApi/v1/auth").permitAll()
                        .requestMatchers(HttpMethod.POST, "UniversoCrisApi/v1/products").permitAll()
                        .requestMatchers(HttpMethod.POST, "UniversoCrisApi/v1/payments").permitAll()
                        .requestMatchers(HttpMethod.POST, "UniversoCrisApi/v1/users").permitAll()
                        .requestMatchers(DOCUMENTATION_OPENAPI).permitAll()
                        .anyRequest().permitAll()
                ).sessionManagement(
                        session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                ).build();
    }

}
