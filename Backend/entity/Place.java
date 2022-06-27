package com.movietime.MovieTime.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "placeId")
public @Getter @Setter
class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="placeId")
    private int placeId;

    @ManyToOne
    @JoinColumn(name = "hallId")
    private Hall hallId;

    @Column(name="taken", nullable = false)
    private boolean taken;

    @Column(name="height", nullable = false)
    private int height;

    @Column(name="width", nullable = false)
    private int width;

    @Column(name="x", nullable = false)
    private int x;

    @Column(name="y", nullable = false)
    private int y;

    @Column(name="color")
    private String color;

    public Place(Hall hallId, boolean taken, int height, int width, int x, int y) {
        this.hallId = hallId;
        this.taken = taken;
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
    }

    public int getPlaceId() {
        return placeId;
    }

    public Hall getHallId() {
        return hallId;
    }

}
