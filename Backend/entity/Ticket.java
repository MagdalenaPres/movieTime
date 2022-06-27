package com.movietime.MovieTime.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
        property = "ticketId")
public @Getter @Setter
class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ticketId" , nullable = false)
    private int    ticketId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "screenId", nullable = false)
    @JsonBackReference
    private Screen    screenId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "filmId", nullable = false)
    @JsonBackReference
    private Film    filmId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "usersId", nullable = false)
    @JsonBackReference
    private Users usersId;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "placeId", nullable = false)
    @JsonBackReference
    private Place placeId;

    public Ticket(Screen screenId, Film filmId, Users usersId, Place placeId) {
        this.screenId = screenId;
        this.filmId = filmId;
        this.usersId = usersId;
        this.placeId = placeId;
    }

}
