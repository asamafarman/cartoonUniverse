package com.example.heroes.repository;

import com.example.heroes.entity.Hero;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface HeroRepository extends CrudRepository<Hero, Long> {
    List<Hero> findByName(String name);

    @Query("SELECT h FROM Hero h")
    List<Hero> getAllHeroes();
}