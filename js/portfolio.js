$(document).ready(function(e) {
	createFeaturedGrid();
	createModals();
});

function createFeaturedGrid() {

	$.each(imgs, function(n, elem){
		$(".featured").append('<div class="col-md-4 text-center">' + 
						        '<img class="img-responsive" src="' + imgs[n].location + '" width="350" height="180" data-toggle="modal" data-target="#'+ imgs[n].modalId + '">' +
						        '<h3>' + imgs[n].nombre + '</h3>' +
						        '<p><a href="' + imgs[n].artstationUrl + '">art station link</a></p>' +
						      '</div>'
						      );
	})
}

function createModals() {

	$.each(imgs, function(n, elem){
		$('body').append('<div class="modal fade" id="' + imgs[n].modalId + '" tabindex="-1" role="dialog" aria-labelledby="' + imgs[n].modalId + 'Label" aria-hidden="true">' +
							    '<div class="modal-dialog">' +
							      '<div class="modal-content">' +
							        '<div class="modal-header">' +
							          '<h4 class="modal-title" id="' + imgs[n].modalId + 'Label">' + imgs[n].nombre + '</h4>' +
							        '</div>' +
							        '<div class="modal-body">' +
							          '<img class="img-responsive" src="' + imgs[n].location + '">' +
							        '</div>' +
							        '<div class="modal-footer">' +
							          '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
							        '</div>' +
							      '</div>' +
							    '</div>' +
							  '</div>'
						      );
	})
}