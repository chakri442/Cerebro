package com.cerebro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.cerebro.model.MavenDefinition;

@Repository("mavenDefinitionRepository")
@RepositoryRestResource(collectionResourceRel = "mavenDefinitionsList", path = "/mavenDefs")
public interface MavenDefinitionRepository extends JpaRepository<MavenDefinition, Long> {

}
