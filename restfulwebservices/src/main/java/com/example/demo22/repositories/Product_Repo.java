package com.example.demo22.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import com.example.demo22.models.Product;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface Product_Repo extends CrudRepository<Product, Integer> {

    @Query(value="SELECT * FROM product where name like ?1 or desc like ?1",nativeQuery=true)
    List<Product> findByNameOrDesc(String key);

    //TODO: order by a score calculated using disc,rating,num-ratings
    @Query(value = "SELECT * FROM product order by score")
    List<Product> orderByScore();

}