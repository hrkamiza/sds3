package hrkamiza.xyz.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import hrkamiza.xyz.dsvendas.entities.Sale;

public interface SalesRepository extends JpaRepository<Sale, Long> {

}
