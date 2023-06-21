package com.example.heroes.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "heroes")
public class Hero {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @NotBlank(message = "Name is mandatory")
    private String name;

    @OneToMany(mappedBy = "hero", cascade = CascadeType.ALL)
    private List<Superpower> superpowers;
   
    public Hero() {
    }

    public Hero(String name, List<Superpower> superpowers) {
        this.name = name;
        this.superpowers = superpowers;
        // Establecer la relación bidireccional
        if (superpowers != null) {
            for (Superpower superpower : superpowers) {
                superpower.setHero(this);
            }
        }
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Superpower> getSuperpowers() {
        return superpowers;
    }

    public void setSuperpowers(List<Superpower> superpowers) {
        this.superpowers = superpowers;
        // Establecer la relación bidireccional
        if (superpowers != null) {
            for (Superpower superpower : superpowers) {
                superpower.setHero(this);
            }
        }
    }

    @Override
    public String toString() {
        return "Hero [id=" + id + ", name=" + name + ", superpowers=" + superpowers + "]";
    }

}
