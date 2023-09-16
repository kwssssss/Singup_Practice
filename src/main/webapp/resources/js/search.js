$(document).ready(function() {
		/* let actionForm = $('#actionForm'); */
		/* $('a.page-link').on('click', function(e) {
			e.preventDefault();
			console.log('click');
			actionForm.find('input[name="pageNum"]').val($(this).attr('href'));
			actionForm.submit();
		});

		$('.move').on('click', function(e) {
			e.preventDefault();
			actionForm.append('<input type="hidden" name="bno"/>');
			actionForm.find('input[name="bno"]').val($(this).attr('href'));
			actionForm.attr('action', '/board/get');
			actionForm.submit();
		}); */ /* 페이지 이동할 때 사용한  코드 */

		let searchForm = $('#searchForm');
		
		$('#searchForm button').on('click', function(e) {	//필수요소 체크
			let type =searchForm.find('option:selected');
			if (!type.val()) {
				alert('검색종류를 선택하세요');
				return false;
			}
		
			let keyword = searchForm.find('input[name="keyword"]');
			if (!keyword.val()) { //필수요소 체크
				alert('키워드를 입력하세요');
				keyword.focus();
				return false;
			}
			
			searchForm.find('input[name="pageNum"]').val('1');	//필수요소 체크
			e.preventDefault();
			searchForm.submit();
		});

	});