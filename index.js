function main() {

    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        let input = $('#shopping-list-entry').val();


        let template = `<li>
        <span class="shopping-item">${input}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
    
    $('.shopping-list').append(template)
    
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(evt) {
        let target = $(this).parent().siblings('span');
        target.toggleClass('shopping-item__checked');
    }
        );


    $('.shopping-list').on('click', '.shopping-item-delete', function(evt) {
        $(this).parent().parent().remove();
    })
}

$(main);