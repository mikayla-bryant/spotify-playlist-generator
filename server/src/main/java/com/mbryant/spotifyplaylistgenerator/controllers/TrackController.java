package com.mbryant.spotifyplaylistgenerator.controllers;


import com.mbryant.spotifyplaylistgenerator.services.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tracks")
public class TrackController
{
    @Autowired
    private TrackService trackService;
}