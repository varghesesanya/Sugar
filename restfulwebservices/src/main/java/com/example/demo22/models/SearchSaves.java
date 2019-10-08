package com.example.demo22.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="searchsaves")
public class SearchSaves {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long searchsaves_id;
	
	
	public Long getId() {
	    return searchsaves_id;
	}

	public void setId(Long id) {
	    this.searchsaves_id = id;
	}

	
}
