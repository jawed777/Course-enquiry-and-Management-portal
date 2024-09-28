package com.connect.connect.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Adddto {
    private Long id;
    private String coursename;
    private String duration;
    private String timings;
    private String mode;
    private int fee;

}