package com.movietime.MovieTime.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "takenPlaceId")
public @Getter @Setter
class TakenPlace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="takenPlaceId")
    private int takenPlaceId;

    @Column(name = "placeId")
    private int placeId;

    @Column(name = "screenId")
    private int screenId;

    public int getTakenPlaceId() {
        return takenPlaceId;
    }

}
