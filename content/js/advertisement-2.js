$(document).ready(function(){$(".btn.advertisement__list-btn").click(function(a){a.preventDefault();a=$(this).attr("href");$(".section-toggle").removeClass("active"),$(a).addClass("active"),$(this).parent().addClass("active").siblings().removeClass("active");a=$(a).offset().top;$("html, body").animate({scrollTop:a-80},1e3)}),$(".section-more-slider").owlCarousel({loop:!0,margin:10,dots:!1,nav:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,smartSpeed:1e3,navText:['<span class="left-arrow"><i class=" fa fa-chevron-left"aria-hidden="true"></i></span>',' <span class="right-arrow"> <i class=" fa fa-chevron-right"aria-hidden="true"></i></span>'],responsive:{0:{items:1},600:{items:2},1e3:{items:4}}}),$(".section-clints-slider").owlCarousel({loop:!0,margin:10,dots:!1,nav:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,smartSpeed:1e3,navText:['<span class="left-arrow"><i class=" fa fa-chevron-left"aria-hidden="true"></i></span>',' <span class="right-arrow"> <i class=" fa fa-chevron-right"aria-hidden="true"></i></span>'],responsive:{0:{items:1},600:{items:2},1e3:{items:4}}}),$(".section-images-slider").owlCarousel({loop:!0,margin:10,dots:!1,nav:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,smartSpeed:1e3,navText:['<span class="left-arrow"><i class=" fa fa-chevron-left"aria-hidden="true"></i></span>',' <span class="right-arrow"> <i class=" fa fa-chevron-right"aria-hidden="true"></i></span>'],responsive:{0:{items:1},600:{items:2},1e3:{items:4}}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmVydGlzZW1lbnQtMi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VjdGlvbklkIiwidGhpcyIsImF0dHIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicGFyZW50Iiwic2libGluZ3MiLCJ0b3AiLCJvZmZzZXQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwibmF2Iiwib3dsQ2Fyb3VzZWwiLCJhdXRvcGxheSIsImF1dG9wbGF5VGltZW91dCIsImF1dG9wbGF5SG92ZXJQYXVzZSIsInNtYXJ0U3BlZWQiLCJuYXZUZXh0IiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwiNjAwIiwiMTAwMCIsImRvdHMiLCIwIiwibG9vcCIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0FDWkYsRUFBQSxnQ0FBZ0NHLE1BQU0sU0FBQUMsR0FDbENDLEVBQUFBLGlCQUNJQyxFQUFjTixFQUFETyxNQUFEQyxLQUFhLFFBQzdCUixFQUFBLG1CQUFtQlMsWUFBWSxVQUMvQkgsRUFBQUEsR0FBV0ksU0FBUyxVQUNwQlYsRUFBRE8sTUFBT0ksU0FBU0QsU0FBUyxVQUFVRSxXQUFXSCxZQUFZLFVBRWxESSxFQURRUCxFQUFBQSxHQUFXUSxTQUM1QkQsSUFDRWIsRUFBQSxjQUFjZSxRQUVSQyxDQUZSQSxVQUFBSCxFQUFBLElBUUYsT0FJRUksRUFBQUEsd0JBSmtDQyxZQUFBLENBS2xDQyxNQUFVLEVBQ1ZDLE9BQUFBLEdBQ0FDLE1BQUFBLEVBQ0FDLEtBQUFBLEVBQ0FDLFVBQ0ksRUFHSkMsZ0JBQVksSUFDUkgsb0JBQUcsRUFDQ0ksV0FBTyxJQUZIRixRQUFBLENBSUgsd0ZBQ0RFLDZGQUVKRCxXQUFNLENBQ0ZDLEVBQU8sQ0FETEEsTUFBQSxHQXBCZEMsSUFBQSxDQTBCRUQsTUFBQSxHQUVVRSxJQUY0QixDQUFBRixNQUFBLE1BUXBDSCxFQUFBQSwwQkFSb0NKLFlBQUEsQ0FTcENLLE1BQ0ksRUFHSkMsT0FBWSxHQUNSSSxNQUFHLEVBQ0NILEtBQUssRUFGRE4sVUFBQSxFQUlSQyxnQkFBSyxJQUNESyxvQkFBTyxFQUxISCxXQUFBLElBT1JDLFFBQU0sQ0FDRkUsd0ZBREUsNkZBcEJkRCxXQUFBLENBMEJFSyxFQUFBLENBQXNDSixNQUFBLEdBRzlCQyxJQUg4QixDQUFBRCxNQUFBLEdBTXBDTCxJQUFBQSxDQUNBQyxNQUFrQixNQVFWSSxFQUFBQSwwQkFBT1AsWUFBQSxDQUZIWSxNQUFBLEVBSVJDLE9BQUssR0FDRE4sTUFBSyxFQUxEUixLQUFBLEVBT1JFLFVBQU0sRUFDRk0sZ0JBQU8sSUFETEosb0JBQUEsRUFQRUMsV0FBQSxJQWJoQkMsUUFBQSxDQXJFSix3RkFnRlksNkZBRUpDLFdBQVksQ0FDUkssRUFBRyxDQUNDSixNQUFPLEdBRVhDLElBQUssQ0FDREQsTUFBTyxHQUVYRSxJQUFNLENBQ0ZGLE1BQU8iLCJmaWxlIjoiYWR2ZXJ0aXNlbWVudC0yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmJ0bi5hZHZlcnRpc2VtZW50X19saXN0LWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25JZCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICAgICQoJy5zZWN0aW9uLXRvZ2dsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHNlY3Rpb25JZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9ICQoc2VjdGlvbklkKS5vZmZzZXQoKTtcclxuICAgICAgICBjb25zdCB0b3AgPSBvZmZzZXQudG9wO1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRvcCAtIDgwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDAwXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zZWN0aW9uLW1vcmUtc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiAzMDAwLFxyXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICBzbWFydFNwZWVkOiAxMDAwLFxyXG4gICAgICAgIG5hdlRleHQ6IFtcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwibGVmdC1hcnJvd1wiPjxpIGNsYXNzPVwiIGZhIGZhLWNoZXZyb24tbGVmdFwiYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAnIDxzcGFuIGNsYXNzPVwicmlnaHQtYXJyb3dcIj4gPGkgY2xhc3M9XCIgZmEgZmEtY2hldnJvbi1yaWdodFwiYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj4nLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwMDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zZWN0aW9uLWNsaW50cy1zbGlkZXInKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBtYXJnaW46IDEwLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDMwMDAsXHJcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDEwMDAsXHJcbiAgICAgICAgbmF2VGV4dDogW1xyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJsZWZ0LWFycm93XCI+PGkgY2xhc3M9XCIgZmEgZmEtY2hldnJvbi1sZWZ0XCJhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPicsXHJcbiAgICAgICAgICAgICcgPHNwYW4gY2xhc3M9XCJyaWdodC1hcnJvd1wiPiA8aSBjbGFzcz1cIiBmYSBmYS1jaGV2cm9uLXJpZ2h0XCJhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPicsXHJcbiAgICAgICAgXSxcclxuICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA2MDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDAwOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNlY3Rpb24taW1hZ2VzLXNsaWRlcicpLm93bENhcm91c2VsKHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogMzAwMCxcclxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgc21hcnRTcGVlZDogMTAwMCxcclxuICAgICAgICBuYXZUZXh0OiBbXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImxlZnQtYXJyb3dcIj48aSBjbGFzcz1cIiBmYSBmYS1jaGV2cm9uLWxlZnRcImFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+JyxcclxuICAgICAgICAgICAgJyA8c3BhbiBjbGFzcz1cInJpZ2h0LWFycm93XCI+IDxpIGNsYXNzPVwiIGZhIGZhLWNoZXZyb24tcmlnaHRcImFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+JyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDYwMDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEwMDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiA0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSk7XHJcbiJdfQ==
