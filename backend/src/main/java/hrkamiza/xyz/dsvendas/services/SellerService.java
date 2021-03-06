package hrkamiza.xyz.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hrkamiza.xyz.dsvendas.dto.SellerDTO;
import hrkamiza.xyz.dsvendas.entities.Seller;
import hrkamiza.xyz.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	private SellerRepository repository;
	
	@Transactional(readOnly = true)
	public List<SellerDTO> findAll(){
	List<Seller> result = repository.findAll();
	return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}
	
}
