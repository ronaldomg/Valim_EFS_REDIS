/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:4:46.32
*/
gx.evt.autoSkip = false;
gx.define('hreducaoz', false, function () {
   this.ServerClass =  "hreducaoz" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV40Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Reducaozvlrgrandeinicial=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(70) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("REDUCAOZVLRGRANDEINICIAL", gx.fn.currentGridRowImpl(70));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Reducaozvlrgrandefinal=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(70) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("REDUCAOZVLRGRANDEFINAL", gx.fn.currentGridRowImpl(70));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e25pu2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodaltotalizaaliquota",[this.A5775ReducaoZNumeroLoja, this.A4326ReducaoZSequenciaECF, this.A3996ReducaoZData]), []);
      this.refreshOutputs([]);
   };
   this.e11pu2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12pu2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17pu2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13pu2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14pu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15pu2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16pu2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20pu2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21pu2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22pu2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23pu2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26pu2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27pu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,27,29,32,34,36,40,45,48,51,53,55,57,59,61,64,66,67,71,72,73,74,75,76,77,78,79,80,81,82,83,84,91,92,93,94];
   this.GXLastCtrlId =94;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",70,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hreducaoz",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3996,71,"REDUCAOZDATA","","","ReducaoZData","date",0,"px",10,10,"right",null,[],3996,"ReducaoZData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3982,72,"REDUCAOZNUMINTERVENCAO","","","ReducaoZNumIntervencao","int",0,"px",6,6,"right",null,[],3982,"ReducaoZNumIntervencao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3983,73,"REDUCAOZPRIMEIRAOPERACAO","","","ReducaoZPrimeiraOperacao","int",0,"px",6,6,"right",null,[],3983,"ReducaoZPrimeiraOperacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3984,74,"REDUCAOZULTIMAOPERACAO","","","ReducaoZUltimaOperacao","int",0,"px",6,6,"right",null,[],3984,"ReducaoZUltimaOperacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3985,75,"REDUCAOZCONTADORREDUCAO","","","ReducaoZContadorReducao","int",0,"px",6,6,"right",null,[],3985,"ReducaoZContadorReducao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3986,76,"REDUCAOZVLRGRANDEINICIAL","","","ReducaoZVlrGrandeInicial","decimal",0,"px",22,22,"right",null,[],3986,"ReducaoZVlrGrandeInicial",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3987,77,"REDUCAOZVLRGRANDEFINAL","","","ReducaoZVlrGrandeFinal","decimal",0,"px",22,22,"right",null,[],3987,"ReducaoZVlrGrandeFinal",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3988,78,"REDUCAOZVENDABRUTA","Venda Bruta","","ReducaoZVendaBruta","decimal",0,"px",22,22,"right",null,[],3988,"ReducaoZVendaBruta",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpconsultaraliquota","vBMPCONSULTARALIQUOTA",79,0,"px",17,"px","e25pu2_client","","","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",80,0,"px",17,"px","e20pu2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",81,0,"px",17,"px","e21pu2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",82,0,"px",17,"px","e22pu2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5775,83,"REDUCAOZNUMEROLOJA","","","ReducaoZNumeroLoja","int",0,"px",4,4,"right",null,[],5775,"ReducaoZNumeroLoja",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4326,84,"REDUCAOZSEQUENCIAECF","","","ReducaoZSequenciaECF","int",0,"px",3,3,"right",null,[],4326,"ReducaoZSequenciaECF",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vREDUCAOZNUMEROLOJA",gxz:"ZV31ReducaoZNumeroLoja",gxold:"OV31ReducaoZNumeroLoja",gxvar:"AV31ReducaoZNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ReducaoZNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ReducaoZNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZNUMEROLOJA",gx.O.AV31ReducaoZNumeroLoja,0)},c2v:function(){gx.O.AV31ReducaoZNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREDUCAOZNUMEROLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"PLOJA",grid:0};
   GXValidFnc[17]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vREDUCAOZSEQUENCIAECF",gxz:"ZV32ReducaoZSequenciaECF",gxold:"OV32ReducaoZSequenciaECF",gxvar:"AV32ReducaoZSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ReducaoZSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32ReducaoZSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZSEQUENCIAECF",gx.O.AV32ReducaoZSequenciaECF,0)},c2v:function(){gx.O.AV32ReducaoZSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREDUCAOZSEQUENCIAECF",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPDVCODIGO",gxz:"ZV33PDVCodigo",gxold:"OV33PDVCodigo",gxvar:"AV33PDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33PDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33PDVCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPDVCODIGO",gx.O.AV33PDVCodigo,0)},c2v:function(){gx.O.AV33PDVCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPDVCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[29]={fld:"TABLE10",grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vREDUCAOZDATA_INI",gxz:"ZV28ReducaoZData_ini",gxold:"OV28ReducaoZData_ini",gxvar:"AV28ReducaoZData_ini",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ReducaoZData_ini=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28ReducaoZData_ini=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZDATA_INI",gx.O.AV28ReducaoZData_ini,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28ReducaoZData_ini=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vREDUCAOZDATA_INI")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vREDUCAOZDATA_FIM",gxz:"ZV29ReducaoZData_fim",gxold:"OV29ReducaoZData_fim",gxvar:"AV29ReducaoZData_fim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ReducaoZData_fim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29ReducaoZData_fim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZDATA_FIM",gx.O.AV29ReducaoZData_fim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29ReducaoZData_fim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vREDUCAOZDATA_FIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAO",gxz:"ZV30Opcao",gxold:"OV30Opcao",gxvar:"AV30Opcao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV30Opcao=Value},v2z:function(Value){gx.O.ZV30Opcao=Value},v2c:function(){gx.fn.setCheckBoxValue("vOPCAO",gx.O.AV30Opcao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30Opcao=this.val()},val:function(){return gx.fn.getControlValue("vOPCAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[45]={fld:"TABLE4",grid:0};
   GXValidFnc[48]={fld:"TABLE6",grid:0};
   GXValidFnc[51]={fld:"IMAGE2",grid:0};
   GXValidFnc[53]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[55]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[57]={fld:"IMAGE1",grid:0};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   GXValidFnc[61]={fld:"TABLE5",grid:0};
   GXValidFnc[64]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZDATA",gxz:"Z3996ReducaoZData",gxold:"O3996ReducaoZData",gxvar:"A3996ReducaoZData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3996ReducaoZData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3996ReducaoZData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("REDUCAOZDATA",row || gx.fn.currentGridRowImpl(70),gx.O.A3996ReducaoZData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3996ReducaoZData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("REDUCAOZDATA",row || gx.fn.currentGridRowImpl(70))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZNUMINTERVENCAO",gxz:"Z3982ReducaoZNumIntervencao",gxold:"O3982ReducaoZNumIntervencao",gxvar:"A3982ReducaoZNumIntervencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3982ReducaoZNumIntervencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3982ReducaoZNumIntervencao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REDUCAOZNUMINTERVENCAO",row || gx.fn.currentGridRowImpl(70),gx.O.A3982ReducaoZNumIntervencao,0)},c2v:function(){gx.O.A3982ReducaoZNumIntervencao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REDUCAOZNUMINTERVENCAO",row || gx.fn.currentGridRowImpl(70),'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZPRIMEIRAOPERACAO",gxz:"Z3983ReducaoZPrimeiraOperacao",gxold:"O3983ReducaoZPrimeiraOperacao",gxvar:"A3983ReducaoZPrimeiraOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3983ReducaoZPrimeiraOperacao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3983ReducaoZPrimeiraOperacao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REDUCAOZPRIMEIRAOPERACAO",row || gx.fn.currentGridRowImpl(70),gx.O.A3983ReducaoZPrimeiraOperacao,0)},c2v:function(){gx.O.A3983ReducaoZPrimeiraOperacao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REDUCAOZPRIMEIRAOPERACAO",row || gx.fn.currentGridRowImpl(70),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZULTIMAOPERACAO",gxz:"Z3984ReducaoZUltimaOperacao",gxold:"O3984ReducaoZUltimaOperacao",gxvar:"A3984ReducaoZUltimaOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3984ReducaoZUltimaOperacao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3984ReducaoZUltimaOperacao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REDUCAOZULTIMAOPERACAO",row || gx.fn.currentGridRowImpl(70),gx.O.A3984ReducaoZUltimaOperacao,0)},c2v:function(){gx.O.A3984ReducaoZUltimaOperacao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REDUCAOZULTIMAOPERACAO",row || gx.fn.currentGridRowImpl(70),'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZCONTADORREDUCAO",gxz:"Z3985ReducaoZContadorReducao",gxold:"O3985ReducaoZContadorReducao",gxvar:"A3985ReducaoZContadorReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3985ReducaoZContadorReducao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3985ReducaoZContadorReducao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REDUCAOZCONTADORREDUCAO",row || gx.fn.currentGridRowImpl(70),gx.O.A3985ReducaoZContadorReducao,0)},c2v:function(){gx.O.A3985ReducaoZContadorReducao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REDUCAOZCONTADORREDUCAO",row || gx.fn.currentGridRowImpl(70),'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:this.Valid_Reducaozvlrgrandeinicial,isvalid:null,rgrid:[],fld:"REDUCAOZVLRGRANDEINICIAL",gxz:"Z3986ReducaoZVlrGrandeInicial",gxold:"O3986ReducaoZVlrGrandeInicial",gxvar:"A3986ReducaoZVlrGrandeInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3986ReducaoZVlrGrandeInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3986ReducaoZVlrGrandeInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("REDUCAOZVLRGRANDEINICIAL",row || gx.fn.currentGridRowImpl(70),gx.O.A3986ReducaoZVlrGrandeInicial,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3986ReducaoZVlrGrandeInicial=this.val()},val:function(row){return gx.fn.getGridDecimalValue("REDUCAOZVLRGRANDEINICIAL",row || gx.fn.currentGridRowImpl(70),'.',',')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:this.Valid_Reducaozvlrgrandefinal,isvalid:null,rgrid:[],fld:"REDUCAOZVLRGRANDEFINAL",gxz:"Z3987ReducaoZVlrGrandeFinal",gxold:"O3987ReducaoZVlrGrandeFinal",gxvar:"A3987ReducaoZVlrGrandeFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3987ReducaoZVlrGrandeFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3987ReducaoZVlrGrandeFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("REDUCAOZVLRGRANDEFINAL",row || gx.fn.currentGridRowImpl(70),gx.O.A3987ReducaoZVlrGrandeFinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3987ReducaoZVlrGrandeFinal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("REDUCAOZVLRGRANDEFINAL",row || gx.fn.currentGridRowImpl(70),'.',',')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZVENDABRUTA",gxz:"Z3988ReducaoZVendaBruta",gxold:"O3988ReducaoZVendaBruta",gxvar:"A3988ReducaoZVendaBruta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3988ReducaoZVendaBruta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3988ReducaoZVendaBruta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("REDUCAOZVENDABRUTA",row || gx.fn.currentGridRowImpl(70),gx.O.A3988ReducaoZVendaBruta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3988ReducaoZVendaBruta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("REDUCAOZVENDABRUTA",row || gx.fn.currentGridRowImpl(70),'.',',')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONSULTARALIQUOTA",gxz:"ZV34bmpConsultarAliquota",gxold:"OV34bmpConsultarAliquota",gxvar:"AV34bmpConsultarAliquota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpConsultarAliquota=Value},v2z:function(Value){gx.O.ZV34bmpConsultarAliquota=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONSULTARALIQUOTA",row || gx.fn.currentGridRowImpl(70),gx.O.AV34bmpConsultarAliquota,gx.O.AV45Bmpconsultaraliquota_GXI)},c2v:function(){gx.O.AV45Bmpconsultaraliquota_GXI=this.val_GXI();gx.O.AV34bmpConsultarAliquota=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONSULTARALIQUOTA",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONSULTARALIQUOTA_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV45Bmpconsultaraliquota_GXI',nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(70),gx.O.AV7bmpAlt,gx.O.AV42Bmpalt_GXI)},c2v:function(){gx.O.AV42Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV42Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(70),gx.O.AV8bmpExc,gx.O.AV43Bmpexc_GXI)},c2v:function(){gx.O.AV43Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV43Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(70),gx.O.AV16bmpCon,gx.O.AV44Bmpcon_GXI)},c2v:function(){gx.O.AV44Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV44Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZNUMEROLOJA",gxz:"Z5775ReducaoZNumeroLoja",gxold:"O5775ReducaoZNumeroLoja",gxvar:"A5775ReducaoZNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5775ReducaoZNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5775ReducaoZNumeroLoja=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REDUCAOZNUMEROLOJA",row || gx.fn.currentGridRowImpl(70),gx.O.A5775ReducaoZNumeroLoja,0)},c2v:function(){gx.O.A5775ReducaoZNumeroLoja=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REDUCAOZNUMEROLOJA",row || gx.fn.currentGridRowImpl(70),'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZSEQUENCIAECF",gxz:"Z4326ReducaoZSequenciaECF",gxold:"O4326ReducaoZSequenciaECF",gxvar:"A4326ReducaoZSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4326ReducaoZSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4326ReducaoZSequenciaECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REDUCAOZSEQUENCIAECF",row || gx.fn.currentGridRowImpl(70),gx.O.A4326ReducaoZSequenciaECF,0)},c2v:function(){gx.O.A4326ReducaoZSequenciaECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REDUCAOZSEQUENCIAECF",row || gx.fn.currentGridRowImpl(70),'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"JS", format:2,grid:0};
   GXValidFnc[92]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"PROMPT_PDVCODIGO",grid:0};
   this.AV31ReducaoZNumeroLoja = 0 ;
   this.ZV31ReducaoZNumeroLoja = 0 ;
   this.OV31ReducaoZNumeroLoja = 0 ;
   this.AV32ReducaoZSequenciaECF = 0 ;
   this.ZV32ReducaoZSequenciaECF = 0 ;
   this.OV32ReducaoZSequenciaECF = 0 ;
   this.AV33PDVCodigo = 0 ;
   this.ZV33PDVCodigo = 0 ;
   this.OV33PDVCodigo = 0 ;
   this.AV28ReducaoZData_ini = gx.date.nullDate() ;
   this.ZV28ReducaoZData_ini = gx.date.nullDate() ;
   this.OV28ReducaoZData_ini = gx.date.nullDate() ;
   this.AV29ReducaoZData_fim = gx.date.nullDate() ;
   this.ZV29ReducaoZData_fim = gx.date.nullDate() ;
   this.OV29ReducaoZData_fim = gx.date.nullDate() ;
   this.AV30Opcao = "" ;
   this.ZV30Opcao = "" ;
   this.OV30Opcao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3996ReducaoZData = gx.date.nullDate() ;
   this.O3996ReducaoZData = gx.date.nullDate() ;
   this.Z3982ReducaoZNumIntervencao = 0 ;
   this.O3982ReducaoZNumIntervencao = 0 ;
   this.Z3983ReducaoZPrimeiraOperacao = 0 ;
   this.O3983ReducaoZPrimeiraOperacao = 0 ;
   this.Z3984ReducaoZUltimaOperacao = 0 ;
   this.O3984ReducaoZUltimaOperacao = 0 ;
   this.Z3985ReducaoZContadorReducao = 0 ;
   this.O3985ReducaoZContadorReducao = 0 ;
   this.Z3986ReducaoZVlrGrandeInicial = 0 ;
   this.O3986ReducaoZVlrGrandeInicial = 0 ;
   this.Z3987ReducaoZVlrGrandeFinal = 0 ;
   this.O3987ReducaoZVlrGrandeFinal = 0 ;
   this.Z3988ReducaoZVendaBruta = 0 ;
   this.O3988ReducaoZVendaBruta = 0 ;
   this.ZV34bmpConsultarAliquota = "" ;
   this.OV34bmpConsultarAliquota = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5775ReducaoZNumeroLoja = 0 ;
   this.O5775ReducaoZNumeroLoja = 0 ;
   this.Z4326ReducaoZSequenciaECF = 0 ;
   this.O4326ReducaoZSequenciaECF = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV31ReducaoZNumeroLoja = 0 ;
   this.AV32ReducaoZSequenciaECF = 0 ;
   this.AV33PDVCodigo = 0 ;
   this.AV28ReducaoZData_ini = gx.date.nullDate() ;
   this.AV29ReducaoZData_fim = gx.date.nullDate() ;
   this.AV30Opcao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.A3995ReducaoZEmpresaId = "" ;
   this.A3996ReducaoZData = gx.date.nullDate() ;
   this.A3982ReducaoZNumIntervencao = 0 ;
   this.A3983ReducaoZPrimeiraOperacao = 0 ;
   this.A3984ReducaoZUltimaOperacao = 0 ;
   this.A3985ReducaoZContadorReducao = 0 ;
   this.A3986ReducaoZVlrGrandeInicial = 0 ;
   this.A3987ReducaoZVlrGrandeFinal = 0 ;
   this.A3988ReducaoZVendaBruta = 0 ;
   this.AV34bmpConsultarAliquota = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5775ReducaoZNumeroLoja = 0 ;
   this.A4326ReducaoZSequenciaECF = 0 ;
   this.AV40Pgmname = "" ;
   this.Events = {"e11pu2_client": ["'ANTERIOR'", true] ,"e12pu2_client": ["'PROXIMO'", true] ,"e17pu2_client": ["VPAGINA.CLICK", true] ,"e13pu2_client": ["'NOVO'", true] ,"e14pu2_client": ["'FECHAR'", true] ,"e15pu2_client": ["'IMPRIMIR'", true] ,"e16pu2_client": ["'PROCURAR'", true] ,"e20pu2_client": ["'ALTERAR'", true] ,"e21pu2_client": ["'EXCLUIR'", true] ,"e22pu2_client": ["'CONSULTAR'", true] ,"e23pu2_client": ["'ATUALIZAPAGINA'", true] ,"e26pu2_client": ["ENTER", true] ,"e27pu2_client": ["CANCEL", true] ,"e25pu2_client": ["'TOTALIZARALIQUOTA'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpConsultarAliquota',fld:'vBMPCONSULTARALIQUOTA'},{av:'gx.fn.getCtrlProperty("vBMPCONSULTARALIQUOTA","Tooltiptext")',ctrl:'vBMPCONSULTARALIQUOTA',prop:'Tooltiptext'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpConsultarAliquota',fld:'vBMPCONSULTARALIQUOTA'},{av:'gx.fn.getCtrlProperty("vBMPCONSULTARALIQUOTA","Tooltiptext")',ctrl:'vBMPCONSULTARALIQUOTA',prop:'Tooltiptext'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{ctrl:'REDUCAOZNUMEROLOJA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REDUCAOZNUMEROLOJA","Title")',ctrl:'REDUCAOZNUMEROLOJA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'REDUCAOZSEQUENCIAECF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REDUCAOZSEQUENCIAECF","Title")',ctrl:'REDUCAOZSEQUENCIAECF',prop:'Title'},{ctrl:'REDUCAOZDATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REDUCAOZDATA","Title")',ctrl:'REDUCAOZDATA',prop:'Title'},{ctrl:'REDUCAOZNUMINTERVENCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REDUCAOZNUMINTERVENCAO","Title")',ctrl:'REDUCAOZNUMINTERVENCAO',prop:'Title'},{ctrl:'REDUCAOZPRIMEIRAOPERACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REDUCAOZPRIMEIRAOPERACAO","Title")',ctrl:'REDUCAOZPRIMEIRAOPERACAO',prop:'Title'},{ctrl:'REDUCAOZULTIMAOPERACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REDUCAOZULTIMAOPERACAO","Title")',ctrl:'REDUCAOZULTIMAOPERACAO',prop:'Title'},{ctrl:'REDUCAOZCONTADORREDUCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REDUCAOZCONTADORREDUCAO","Title")',ctrl:'REDUCAOZCONTADORREDUCAO',prop:'Title'},{ctrl:'REDUCAOZVLRGRANDEINICIAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REDUCAOZVLRGRANDEINICIAL","Title")',ctrl:'REDUCAOZVLRGRANDEINICIAL',prop:'Title'},{ctrl:'REDUCAOZVLRGRANDEFINAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REDUCAOZVLRGRANDEFINAL","Title")',ctrl:'REDUCAOZVLRGRANDEFINAL',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV33PDVCodigo',fld:'vPDVCODIGO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpConsultarAliquota',fld:'vBMPCONSULTARALIQUOTA'},{av:'gx.fn.getCtrlProperty("vBMPCONSULTARALIQUOTA","Tooltiptext")',ctrl:'vBMPCONSULTARALIQUOTA',prop:'Tooltiptext'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33PDVCodigo',fld:'vPDVCODIGO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpConsultarAliquota',fld:'vBMPCONSULTARALIQUOTA'},{av:'gx.fn.getCtrlProperty("vBMPCONSULTARALIQUOTA","Tooltiptext")',ctrl:'vBMPCONSULTARALIQUOTA',prop:'Tooltiptext'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV33PDVCodigo',fld:'vPDVCODIGO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpConsultarAliquota',fld:'vBMPCONSULTARALIQUOTA'},{av:'gx.fn.getCtrlProperty("vBMPCONSULTARALIQUOTA","Tooltiptext")',ctrl:'vBMPCONSULTARALIQUOTA',prop:'Tooltiptext'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33PDVCodigo',fld:'vPDVCODIGO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV33PDVCodigo',fld:'vPDVCODIGO'},{av:'AV27Data',fld:'vDATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV40Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV30Opcao',fld:'vOPCAO'},{av:'AV41Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV36QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30Opcao',fld:'vOPCAO'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpConsultarAliquota',fld:'vBMPCONSULTARALIQUOTA'},{av:'gx.fn.getCtrlProperty("vBMPCONSULTARALIQUOTA","Tooltiptext")',ctrl:'vBMPCONSULTARALIQUOTA',prop:'Tooltiptext'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33PDVCodigo',fld:'vPDVCODIGO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5775ReducaoZNumeroLoja',fld:'REDUCAOZNUMEROLOJA'},{av:'A4326ReducaoZSequenciaECF',fld:'REDUCAOZSEQUENCIAECF'},{av:'A3996ReducaoZData',fld:'REDUCAOZDATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV33PDVCodigo',fld:'vPDVCODIGO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A5775ReducaoZNumeroLoja',fld:'REDUCAOZNUMEROLOJA'},{av:'A4326ReducaoZSequenciaECF',fld:'REDUCAOZSEQUENCIAECF'},{av:'A3996ReducaoZData',fld:'REDUCAOZDATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV33PDVCodigo',fld:'vPDVCODIGO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5775ReducaoZNumeroLoja',fld:'REDUCAOZNUMEROLOJA'},{av:'A4326ReducaoZSequenciaECF',fld:'REDUCAOZSEQUENCIAECF'},{av:'A3996ReducaoZData',fld:'REDUCAOZDATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV33PDVCodigo',fld:'vPDVCODIGO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'TOTALIZARALIQUOTA'"] = [[{av:'A5775ReducaoZNumeroLoja',fld:'REDUCAOZNUMEROLOJA'},{av:'A4326ReducaoZSequenciaECF',fld:'REDUCAOZSEQUENCIAECF'},{av:'A3996ReducaoZData',fld:'REDUCAOZDATA'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV32ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV28ReducaoZData_ini',fld:'vREDUCAOZDATA_INI'},{av:'AV29ReducaoZData_fim',fld:'vREDUCAOZDATA_FIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpConsultarAliquota',fld:'vBMPCONSULTARALIQUOTA'},{av:'gx.fn.getCtrlProperty("vBMPCONSULTARALIQUOTA","Tooltiptext")',ctrl:'vBMPCONSULTARALIQUOTA',prop:'Tooltiptext'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.setPrompt("PLOJA", [13,19]);
   this.setPrompt("PROMPT_PDVCODIGO", [24]);
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[92]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpConsultarAliquota", rfrProp:"Value", gxAttId:"Bmpconsultaraliquota"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpConsultarAliquota", rfrProp:"Tooltiptext", gxAttId:"Bmpconsultaraliquota"});
   GridContainer.addRefreshingVar({rfrVar:"AV40Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hreducaoz());
