package com.movietime.MovieTime.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "screenId")
public @Getter @Setter
class Screen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="`screenId`")
    private int screenId;

    @Column(name="screenHour", nullable = false)
    private String screenHour;

    @Column(name="screenDay", nullable = false)
    private String screenDay;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "filmId")
    @JsonBackReference
    private Film filmId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "hallId")
    @JsonBackReference
    private Hall hallId;

    public int getScreenId() {
        return screenId;
    }

    public Film getFilmFk() {
        return filmId;
    }

}

