package com.movietime.MovieTime.entity;

public class TicketInfo {
    int screenId;
    int filmId;
    int placeId;
    int userId;

    public TicketInfo(int screenId, int filmId, int placeId, int userId) {
        this.screenId = screenId;
        this.filmId = filmId;
        this.placeId = placeId;
        this.userId = userId;
    }

    public int getScreenId() {
        return screenId;
    }

    public int getFilmId() {
        return filmId;
    }

    public int getPlaceId() {
        return placeId;
    }

    public int getUserId() {
        return userId;
    }

}
