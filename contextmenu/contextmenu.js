; (function (document) {

  function Contextmenu(menuData) {
    var self = this;
    self.menuData = menuData;

    self.renderUI();
    self.bindClickEvent();
    self.bindMenuEvent();
  }

  Contextmenu.prototype.renderUI = function () {
    var self = this;
    var menuData = self.menuData;
    var htmlArr = menuData.map(function (item, index) {
      var className = item.disabled ? 'disabled' : '';
      var dividerHtml = '<li class="menu-item divider"></li>';
      var optionHtml = '<li class="menu-item ' + className + '" data-key="' + index + '">' + item.text + '</li>';
      return item.divider ? optionHtml + dividerHtml : optionHtml;
    });
    var html = htmlArr.join('');
    self.menu = document.createElement('div');
    self.menu.setAttribute('id', 'contextmenu');
    self.menu.innerHTML = html;
    document.body.appendChild(self.menu);
  }

  Contextmenu.prototype.bindClickEvent = function () {
    var self = this;
    var menuData = self.menuData;
    var lis = self.menu.querySelectorAll('li');
    lis.forEach(function (li) {
      var index = li.getAttribute('data-key');
      li.addEventListener('click', function () {
        menuData[index]['callback']();
      })
    });
  }

  Contextmenu.prototype.bindMenuEvent = function () {
    var self = this;
    document.addEventListener('click', function () {
      self.menu.style.display = 'none';
    });

    document.addEventListener('contextmenu', function (event) {
      var e = event || window.event;
      e.preventDefault();
      var eventPosition = {
        x: e.clientX,
        y: e.clientY
      };
      var clientPosition = {
        x: document.documentElement.clientWidth,
        y: document.documentElement.clientHeight,
      };
      var elePosition = {
        x: self.menu.offsetWidth,
        y: self.menu.offsetHeight,
      };

      /*
      * 菜单左上角默认为鼠标右键时所在的位置
      * 边界值需调整
      */
      var position = { x: 0, y: 0 };
      position.x = eventPosition.x + elePosition.x <= clientPosition.x
        ? eventPosition.x
        : clientPosition.x - elePosition.x;

      position.y = eventPosition.y + elePosition.y <= clientPosition.y
        ? eventPosition.y
        : eventPosition.y - elePosition.y;

      self.menu.style.display = 'inline-block';
      self.menu.style.left = position.x + 'px';
      self.menu.style.top = position.y + 'px';

      return false;
    })
  }

  window.Contextmenu = Contextmenu;
})(document);