 $(document).ready(function(){
 
    $("#menuContatos").click(function(){
        $("#inicial").hide(1000,"linear");
        $("#receitas").hide(1000,"linear");
        $("#nossosProdutos").hide(1000,"linear");
        $("#fotoInicio").hide(1000,"linear");
          $("#receitaArroz").hide(1000,"linear");
             $("#receitaMocoto").hide(1000,"linear");
        $("#contatos").show(1000);
    });
 $("#menuInicial").click(function(){
        $("#contatos").hide(1000,"linear");
        $("#receitas").hide(1000,"linear");
        $("#receitaArroz").hide(1000,"linear");
        $("#nossosProdutos").hide(1000,"linear");
   
           $("#receitaMocoto").hide(1000,"linear");
                  
        $("#fotoInicio").show(1000);
        $("#inicial").show(1000);
    });
$("#menuProdutos").click(function(){
        $("#contatos").hide(1000,"linear");
        $("#receitas").hide(1000,"linear");
        $("#inicial").hide(1000,"linear");
        $("#fotoInicio").hide(1000,"linear");
       
          $("#receitaArroz").hide(1000,"linear");
             $("#receitaMocoto").hide(1000,"linear");
        $("#nossosProdutos").show(1000);
    });
    $("#menuReceitas").click(function(){
        $("#contatos").hide(1000,"linear");
        $("#nossosProdutos").hide(1000,"linear");
        $("#inicial").hide(1000,"linear");
       $("#fotoInicio").hide(1000,"linear");
          $("#receitaArroz").hide(1000,"linear");
          $("#receitaMocoto").hide(1000,"linear");
        $("#receitas").show(1000);
    });
  
     $("#btMocoto").click(function(){
        $("#receitas").hide(1000,"linear");
         $("#receitaMocoto").show(1000);
    });
    $("#btArroz").click(function(){
        $("#receitas").hide(1000,"linear");
         $("#receitaArroz").show(1000);
    });
     
});
