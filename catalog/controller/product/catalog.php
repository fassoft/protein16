<?php  
class ControllerProductCatalog extends Controller {

	
	public function index() {
		$this->language->load('product/catalog');
		
    	$this->document->setTitle($this->language->get('heading_title'));

    	$data = array();
		$data['heading_title'] = $this->language->get('heading_title');
		
		$this->load->model('catalog/category');
		
		$this->load->model('tool/image');
		
		/*$this->document->addStyle('catalog/view/theme/default/stylesheet/catalog.css');*/

		$data['catalog'] = $this->getCategories(0);

		if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/product/catalog')) {
			$template = $this->config->get('config_template') . '/template/product/catalog';
		} else {
			$template = 'product/catalog';
		}
		

		$data['column_left'] = $this->load->controller('common/column_left');
		$data['column_right'] = $this->load->controller('common/column_right');
		$data['content_top'] = $this->load->controller('common/content_top');
		$data['content_bottom'] = $this->load->controller('common/content_bottom');
		$data['footer'] = $this->load->controller('common/footer');
		$data['header'] = $this->load->controller('common/header');


		$this->response->setOutput($this->load->view($template, $data));
		
  	}
	
	private function getCategories($parent_id) {
		
		$catalog = array();
		
		
		$results = $this->model_catalog_category->getCategories($parent_id);
		
		
		foreach ($results as $result) {
		
				$catalog_children = array();			
				$results2 = $this->model_catalog_category->getCategories($result['category_id']);
				
				foreach ($results2 as $result2) {
					$catalog_children[] = array(
					'id'=> $result2['category_id'],
					'name'=> $result2['name'],
		//			'image'=> $this->model_tool_image->resize($result2['image'], 110, 110),
					'href'=> $this->url->link('product/category', 'path=' . $result['category_id'].'_'.$result2['category_id']),
					);	
				}
			
			if ($result['image']=='') {$result['image']='no_image.jpg';}
			
			$catalog[] = array(
			'id'=> $result['category_id'],
			'name'=> $result['name'],
			'image'=> $this->model_tool_image->resize($result['image'], 200, 200),
			'href'=> $this->url->link('product/category', 'path=' . $result['category_id']),
			'children'=> $catalog_children,
			);

		}
		
		return $catalog;
	}		
}
?>