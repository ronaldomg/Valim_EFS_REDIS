/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:38:35.49
*/
gx.evt.autoSkip = false;
gx.define('hconfirmacaobaixapagrec', false, function () {
   this.ServerClass =  "hconfirmacaobaixapagrec" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.s112_client=function()
   {
      this.AV19TpErro = gx.num.trunc( 0 ,0) ;
      if ( this.AV15TotalReceber < this.AV14TotalPagar )
      {
         this.addMessage("Valor a Receber não pode ser menor que o a pagar");
         gx.fn.usrSetFocus("BTNFECHAR") ;
         this.AV19TpErro = gx.num.trunc( 1 ,0) ;
      }
      else
      {
         if ( this.AV13ValorDesconto > this.AV16ValorDiferenca )
         {
            this.addMessage("Desconto não pode ser maior que a diferença");
            gx.fn.usrSetFocus("vVALORDESCONTO") ;
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
   };
   this.e131es2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e111es2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151es2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,19,21,24,26,34];
   this.GXLastCtrlId =34;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALPAGAR",gxz:"ZV14TotalPagar",gxold:"OV14TotalPagar",gxvar:"AV14TotalPagar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14TotalPagar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV14TotalPagar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTALPAGAR",gx.O.AV14TotalPagar,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14TotalPagar=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTALPAGAR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 11 , function() {
   });
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALRECEBER",gxz:"ZV15TotalReceber",gxold:"OV15TotalReceber",gxvar:"AV15TotalReceber",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TotalReceber=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV15TotalReceber=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTALRECEBER",gx.O.AV15TotalReceber,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15TotalReceber=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTALRECEBER",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDESCONTO",gxz:"ZV13ValorDesconto",gxold:"OV13ValorDesconto",gxvar:"AV13ValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV13ValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORDESCONTO",gx.O.AV13ValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13ValorDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORDESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDIFERENCA",gxz:"ZV16ValorDiferenca",gxold:"OV16ValorDiferenca",gxvar:"AV16ValorDiferenca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ValorDiferenca=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV16ValorDiferenca=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORDIFERENCA",gx.O.AV16ValorDiferenca,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16ValorDiferenca=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORDIFERENCA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[34]={fld:"JS", format:2,grid:0};
   this.AV14TotalPagar = 0 ;
   this.ZV14TotalPagar = 0 ;
   this.OV14TotalPagar = 0 ;
   this.AV15TotalReceber = 0 ;
   this.ZV15TotalReceber = 0 ;
   this.OV15TotalReceber = 0 ;
   this.AV13ValorDesconto = 0 ;
   this.ZV13ValorDesconto = 0 ;
   this.OV13ValorDesconto = 0 ;
   this.AV16ValorDiferenca = 0 ;
   this.ZV16ValorDiferenca = 0 ;
   this.OV16ValorDiferenca = 0 ;
   this.AV14TotalPagar = 0 ;
   this.AV15TotalReceber = 0 ;
   this.AV13ValorDesconto = 0 ;
   this.AV16ValorDiferenca = 0 ;
   this.AV19TpErro = 0 ;
   this.Events = {"e131es2_client": ["ENTER", true] ,"e111es2_client": ["'FECHAR'", true] ,"e151es2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV15TotalReceber',fld:'vTOTALRECEBER'},{av:'AV14TotalPagar',fld:'vTOTALPAGAR'},{av:'AV13ValorDesconto',fld:'vVALORDESCONTO'},{av:'AV16ValorDiferenca',fld:'vVALORDIFERENCA'},{av:'AV17SnOk',fld:'vSNOK'}],[{av:'AV17SnOk',fld:'vSNOK'},{av:'AV19TpErro',fld:'vTPERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17SnOk',fld:'vSNOK'},{av:'AV13ValorDesconto',fld:'vVALORDESCONTO'}],[{av:'AV17SnOk',fld:'vSNOK'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfirmacaobaixapagrec());
