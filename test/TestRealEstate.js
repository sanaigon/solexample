var RealEstate = artifacts.require("./RealEstate.sol");


contract('RealEstate', function(accounts){
    var realEstateInstance;

    it("초기화 테스트", function(){
        return RealEstate.deployed().then(function(instance){
            realEstateInstance = instance;
            return realEstateInstance.owner.call();
        }).then(function(owner){
            assert.equal(owner.toUpperCase(), accounts[0].toUpperCase(), "owner가 첫번째 계정과 동일하지 않습니다.")
        })
    });

    it("가나슈 두번째 계정으로 매물 아이디 0번 매입 후 이벤트 생성 및 매입자 정보와 buyer 배열 테스팅", function(){
        return RealEstate.deployed().then(function(instance){
            realEstateInstance = instance;
            return realEstateInstance.buyRealEstate(0, "jkpark", 12, { from: accounts[1], value: web3.utils.toWei("1.5", "ether")})
        }).then(function(receipt){
            assert.equal(receipt.logs.length, 1, "이벤트 하나가 생성되지 않았습니다.");
            assert.equal(receipt.logs[0].event, "LogBuyRealEstate", "이벤트가 LogBuyRealEstate가 아니다")
            assert.equal(receipt.logs[0].args._buyer, accounts[1], "매입자가 가나슈 두번째가 아닙니다.");
            assert.equal(receipt.logs[0].args._id, 0, "매입자가 가나슈 두번째가 아닙니다.");
            return realEstateInstance.getBuyerInfo(0);
        }).then(function(buyerInfo){
            assert.equal(buyerInfo[0].toUpperCase, accounts[1].toUpperCase, "계정이 일치하지 않음");
            assert.equal(buyerInfo[1], "jkpark", "주인이 일치하지 않음");
        })
    });
});
