// 
function get_experience(){


    // Create Date objects for March 2022 and the current date
    const FromDate = new Date(2022, 2); // Month is 0-based (0 = January, 1 = February, ...)
    const currentDate = new Date();
    
    // Calculate the difference in years and months
    const yearDiff = currentDate.getFullYear() - FromDate.getFullYear();
    const monthDiff = currentDate.getMonth() - FromDate.getMonth();
    
    // Adjust the difference if the current month is less than March
    if (currentDate.getDate() < FromDate.getDate()) {
        monthDiff -= 1;
    }
    document.getElementById('experience-span').innerHTML=yearDiff+' Year'+" "+monthDiff+' Months'
}

get_experience();



// 
// const data = [
//     { dateLabel: 'January 2017', title: 'Gathering Information' },
//     { dateLabel: 'February 2017', title: 'Planning' },
//     { dateLabel: 'March 2017', title: 'Design' },
//     { dateLabel: 'April 2017', title: 'Content Writing and Assembly' },
//     { dateLabel: 'May 2017', title: 'Coding' },
//     { dateLabel: 'June 2017', title: 'Testing, Review & Launch' },
//     { dateLabel: 'July 2017', title: 'Maintenance' }
//   ];
  
//   new Vue({
//     el: '#app', 
//     data: {
//       steps: data,
//     },
//     mounted() {
//       var swiper = new Swiper('.swiper-container', {
//         //pagination: '.swiper-pagination',
//         slidesPerView: 3,
//         paginationClickable: true,
//         grabCursor: true,
//         paginationClickable: true,
//         nextButton: '.next-slide',
//         prevButton: '.prev-slide',
//       });    
//     }
//   })
// 
