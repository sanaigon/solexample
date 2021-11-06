App = {
  web3Provider: null,
  contracts: {},
	
  init: function() {
    $.getJSON("../real-estate.json", function (data) {
        var list = $('#list')
        var template = $('#template')

        for (i = 0; i < data.length; i++){
          template.find('img').attr('src', data[i].picture);
          template.find('.id').text(data[i].id);
          template.find('.type').text(data[i].type);
          template.find('.area').text(data[i].area);
          template.find('.price').text(data[i].price);

          list.append(template.html());
        }
      }
    );

    //Web3를 instance화 하기 위함
    return App.initWeb3();
  },

  initWeb3: function() {
    // web3 instance가 이미 활성화 되어있는지 확인한다. (Metamask가 존재하는지 확인)
    if(typeof web3 !== 'undefined'){
      //현재의 web3의 공급자를 전역변수에 설정하고  web3 object를 만든다.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else{
      // 만약 web3 공급자가 존재하지 않는다면 가나슈로 부터 얻어올 수 있도록 한다.
      App.web3Provider = new web3.web3Provider.HttpProvider('http://localhost:8545')
      web3 = new Web3(App.web3Provider);
    }

    // contract 초기화를 호출
    return App.initContract();
  },

  // truffle-contract.js를 이용한다.
  initContract: function() {
    $.getJSON('RealEstate.json', function(data){
      App.contracts.RealEstate = TruffleContract(data);
      // contract의 공급자를 선택한다.
      App.contracts.RealEstate.setProvider(App.web3Provider);
    });
  },

  buyRealEstate: function() {	
    var id = $('#id').val();
    var price = $('#price').val();
    var name = $('#name').val();
    var age = $('#age').val();

    console.log(id);
    console.log(price);
    console.log(name);
    console.log(age);

  },

  loadRealEstates: function() {
	
  },
	
  listenToEvents: function() {
	
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });

  $('#buyModal').on('show.bs.modal', function(e){
    var id = $(e.relatedTarget).parent().find('.id').text();
    var price = web3.toWei(parseFloat($(e.relatedTarget).parent().find('.price').text() || 0), "ether");

    $(e.currentTarget).find('#id').val(id);
    $(e.currentTarget).find('#price').val(price);
  });
});
