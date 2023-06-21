package com.example.heroes.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.example.heroes.entity.Hero;
import com.example.heroes.repository.HeroRepository;

@RestController
@RequestMapping("/heroes")
@CrossOrigin(origins = "*")
public class HeroController { 

    @Autowired
    private HeroRepository heroRepository;

    @GetMapping
    public List<Hero> getHeroes() {
        return heroRepository.getAllHeroes();
    }

    // Obtener un héroe por su ID
    @GetMapping ("/{id}") 
    public ResponseEntity<Hero> getHero(@PathVariable("id") long id) {
        Optional<Hero> hero = heroRepository.findById(id);
        if (hero.isPresent()) {
            return ResponseEntity.ok(hero.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Crear un nuevo héroe
    @PostMapping
    public ResponseEntity<Hero> addHero(@Validated @RequestBody Hero hero) {
        Hero createdHero = heroRepository.save(hero);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdHero);
    }

    // Actualizar un héroe existente
    @PutMapping("/{id}")
    public ResponseEntity<Hero> updateHero(@PathVariable("id") long id, @Validated @RequestBody Hero heroData) {
        Optional<Hero> optionalHero = heroRepository.findById(id);
        if (optionalHero.isPresent()) {
            Hero hero = optionalHero.get();
            hero.setName(heroData.getName());
            hero.setSuperpowers(heroData.getSuperpowers());
            Hero updatedHero = heroRepository.save(hero);
            return ResponseEntity.ok(updatedHero);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Eliminar un héroe existente
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHero(@PathVariable("id") long id) {
        Optional<Hero> optionalHero = heroRepository.findById(id);
        if (optionalHero.isPresent()) {
            heroRepository.delete(optionalHero.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/searchheroes")
    public List<Hero> searchHeroes(@RequestParam String name) {
       return heroRepository.findByName(name);
    }
}
