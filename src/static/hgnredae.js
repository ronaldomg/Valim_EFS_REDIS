/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:57:49.26
*/
gx.evt.autoSkip = false;
gx.define('hgnredae', false, function () {
   this.ServerClass =  "hgnredae" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV33GNREDAEEmpresaId=gx.fn.getControlValue("vGNREDAEEMPRESAID") ;
      this.AV36SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV39Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Gnredaeuffavorecido=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGNREDAEUFFAVORECIDO");
         this.AnyError  = 0;
         if ( ! ( this.AV28GNREDAEUFFavorecido == "" || this.AV28GNREDAEUFFavorecido == "AC" || this.AV28GNREDAEUFFavorecido == "AL" || this.AV28GNREDAEUFFavorecido == "AP" || this.AV28GNREDAEUFFavorecido == "AM" || this.AV28GNREDAEUFFavorecido == "BA" || this.AV28GNREDAEUFFavorecido == "CE" || this.AV28GNREDAEUFFavorecido == "DF" || this.AV28GNREDAEUFFavorecido == "ES" || this.AV28GNREDAEUFFavorecido == "GO" || this.AV28GNREDAEUFFavorecido == "MA" || this.AV28GNREDAEUFFavorecido == "MT" || this.AV28GNREDAEUFFavorecido == "MS" || this.AV28GNREDAEUFFavorecido == "MG" || this.AV28GNREDAEUFFavorecido == "PA" || this.AV28GNREDAEUFFavorecido == "PB" || this.AV28GNREDAEUFFavorecido == "PR" || this.AV28GNREDAEUFFavorecido == "PE" || this.AV28GNREDAEUFFavorecido == "PI" || this.AV28GNREDAEUFFavorecido == "RJ" || this.AV28GNREDAEUFFavorecido == "RN" || this.AV28GNREDAEUFFavorecido == "RS" || this.AV28GNREDAEUFFavorecido == "RO" || this.AV28GNREDAEUFFavorecido == "RR" || this.AV28GNREDAEUFFavorecido == "SC" || this.AV28GNREDAEUFFavorecido == "SP" || this.AV28GNREDAEUFFavorecido == "SE" || this.AV28GNREDAEUFFavorecido == "TO" || this.AV28GNREDAEUFFavorecido == "EX" || (""==this.AV28GNREDAEUFFavorecido) ) )
         {
            try {
               gxballoon.setError("Campo GNREDAEUFFavorecido fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ve2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12ve2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16ve2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13ve2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14ve2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ve2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19ve2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20ve2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21ve2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22ve2_client=function()
   {
      this.executeServerEvent("'NOTAS'", true, arguments[0], false, false);
   };
   this.e23ve2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25ve2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26ve2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,31,33,38,41,44,46,48,50,52,55,57,58,62,63,64,65,66,67,68,69,70,71,72,73,80,81,82];
   this.GXLastCtrlId =82;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",61,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hgnredae",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addComboBox(5385,62,"GNREDAETIPO","","GNREDAETipo","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(5388,63,"GNREDAEUFFAVORECIDO","","GNREDAEUFFavorecido","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(5398,64,"GNREDAENODOCARRECADACAO","","","GNREDAENoDocArrecadacao","char",0,"px",20,20,"left",null,[],5398,"GNREDAENoDocArrecadacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5392,65,"GNREDAEVALOR","","","GNREDAEValor","decimal",0,"px",22,22,"right",null,[],5392,"GNREDAEValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5393,66,"GNREDAEVENCIMENTO","","","GNREDAEVencimento","date",0,"px",10,10,"right",null,[],5393,"GNREDAEVencimento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5395,67,"GNREDAEDATAPAGAMENTO","","","GNREDAEDataPagamento","date",0,"px",10,10,"right",null,[],5395,"GNREDAEDataPagamento",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpnota","vBMPNOTA",68,0,"px",17,"px","e22ve2_client","","Notas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",69,0,"px",17,"px","e19ve2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",70,0,"px",17,"px","e20ve2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",71,0,"px",17,"px","e21ve2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(4681,72,"GNREDAEID","Número da GNRE/DAE","","GNREDAEid","int",0,"px",7,7,"right",null,[],4681,"GNREDAEid",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5386,73,"GNREDAEEMPRESAID","Empresa da GNRE/DAE","","GNREDAEEmpresaId","char",0,"px",10,10,"left",null,[],5386,"GNREDAEEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTIPO", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGNREDAETIPOFILTRO",gxz:"ZV27GNREDAETipoFiltro",gxold:"OV27GNREDAETipoFiltro",gxvar:"AV27GNREDAETipoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27GNREDAETipoFiltro=Value},v2z:function(Value){gx.O.ZV27GNREDAETipoFiltro=Value},v2c:function(){gx.fn.setComboBoxValue("vGNREDAETIPOFILTRO",gx.O.AV27GNREDAETipoFiltro)},c2v:function(){gx.O.AV27GNREDAETipoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vGNREDAETIPOFILTRO")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TXTDOCARREC", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGNREDAENODOCARRECADACAO",gxz:"ZV29GNREDAENoDocArrecadacao",gxold:"OV29GNREDAENoDocArrecadacao",gxvar:"AV29GNREDAENoDocArrecadacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29GNREDAENoDocArrecadacao=Value},v2z:function(Value){gx.O.ZV29GNREDAENoDocArrecadacao=Value},v2c:function(){gx.fn.setControlValue("vGNREDAENODOCARRECADACAO",gx.O.AV29GNREDAENoDocArrecadacao,0)},c2v:function(){gx.O.AV29GNREDAENoDocArrecadacao=this.val()},val:function(){return gx.fn.getControlValue("vGNREDAENODOCARRECADACAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTUFFAV", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Gnredaeuffavorecido,isvalid:null,rgrid:[this.GridContainer],fld:"vGNREDAEUFFAVORECIDO",gxz:"ZV28GNREDAEUFFavorecido",gxold:"OV28GNREDAEUFFavorecido",gxvar:"AV28GNREDAEUFFavorecido",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28GNREDAEUFFavorecido=Value},v2z:function(Value){gx.O.ZV28GNREDAEUFFavorecido=Value},v2c:function(){gx.fn.setComboBoxValue("vGNREDAEUFFAVORECIDO",gx.O.AV28GNREDAEUFFavorecido)},c2v:function(){gx.O.AV28GNREDAEUFFavorecido=this.val()},val:function(){return gx.fn.getControlValue("vGNREDAEUFFAVORECIDO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTVENC", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE10",grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGNREDAEVENCIMENTOINI",gxz:"ZV30GNREDAEVencimentoIni",gxold:"OV30GNREDAEVencimentoIni",gxvar:"AV30GNREDAEVencimentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30GNREDAEVencimentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30GNREDAEVencimentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vGNREDAEVENCIMENTOINI",gx.O.AV30GNREDAEVencimentoIni,0)},c2v:function(){gx.O.AV30GNREDAEVencimentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vGNREDAEVENCIMENTOINI")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TXTA", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGNREDAEVENCIMENTOFIN",gxz:"ZV31GNREDAEVencimentoFin",gxold:"OV31GNREDAEVencimentoFin",gxvar:"AV31GNREDAEVencimentoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31GNREDAEVencimentoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31GNREDAEVencimentoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vGNREDAEVENCIMENTOFIN",gx.O.AV31GNREDAEVencimentoFin,0)},c2v:function(){gx.O.AV31GNREDAEVencimentoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vGNREDAEVENCIMENTOFIN")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   GXValidFnc[41]={fld:"TABLE6",grid:0};
   GXValidFnc[44]={fld:"IMAGE2",grid:0};
   GXValidFnc[46]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[48]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[50]={fld:"BTNHELP",grid:0};
   GXValidFnc[52]={fld:"TABLE5",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAETIPO",gxz:"Z5385GNREDAETipo",gxold:"O5385GNREDAETipo",gxvar:"A5385GNREDAETipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5385GNREDAETipo=Value},v2z:function(Value){gx.O.Z5385GNREDAETipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("GNREDAETIPO",row || gx.fn.currentGridRowImpl(61),gx.O.A5385GNREDAETipo)},c2v:function(){gx.O.A5385GNREDAETipo=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAETIPO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEUFFAVORECIDO",gxz:"Z5388GNREDAEUFFavorecido",gxold:"O5388GNREDAEUFFavorecido",gxvar:"A5388GNREDAEUFFavorecido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5388GNREDAEUFFavorecido=Value},v2z:function(Value){gx.O.Z5388GNREDAEUFFavorecido=Value},v2c:function(row){gx.fn.setGridComboBoxValue("GNREDAEUFFAVORECIDO",row || gx.fn.currentGridRowImpl(61),gx.O.A5388GNREDAEUFFavorecido);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5388GNREDAEUFFavorecido=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAEUFFAVORECIDO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAENODOCARRECADACAO",gxz:"Z5398GNREDAENoDocArrecadacao",gxold:"O5398GNREDAENoDocArrecadacao",gxvar:"A5398GNREDAENoDocArrecadacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5398GNREDAENoDocArrecadacao=Value},v2z:function(Value){gx.O.Z5398GNREDAENoDocArrecadacao=Value},v2c:function(row){gx.fn.setGridControlValue("GNREDAENODOCARRECADACAO",row || gx.fn.currentGridRowImpl(61),gx.O.A5398GNREDAENoDocArrecadacao,0)},c2v:function(){gx.O.A5398GNREDAENoDocArrecadacao=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAENODOCARRECADACAO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEVALOR",gxz:"Z5392GNREDAEValor",gxold:"O5392GNREDAEValor",gxvar:"A5392GNREDAEValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5392GNREDAEValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5392GNREDAEValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("GNREDAEVALOR",row || gx.fn.currentGridRowImpl(61),gx.O.A5392GNREDAEValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5392GNREDAEValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("GNREDAEVALOR",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEVENCIMENTO",gxz:"Z5393GNREDAEVencimento",gxold:"O5393GNREDAEVencimento",gxvar:"A5393GNREDAEVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5393GNREDAEVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5393GNREDAEVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("GNREDAEVENCIMENTO",row || gx.fn.currentGridRowImpl(61),gx.O.A5393GNREDAEVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5393GNREDAEVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("GNREDAEVENCIMENTO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEDATAPAGAMENTO",gxz:"Z5395GNREDAEDataPagamento",gxold:"O5395GNREDAEDataPagamento",gxvar:"A5395GNREDAEDataPagamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5395GNREDAEDataPagamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5395GNREDAEDataPagamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("GNREDAEDATAPAGAMENTO",row || gx.fn.currentGridRowImpl(61),gx.O.A5395GNREDAEDataPagamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5395GNREDAEDataPagamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("GNREDAEDATAPAGAMENTO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPNOTA",gxz:"ZV32bmpNota",gxold:"OV32bmpNota",gxvar:"AV32bmpNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpNota=Value},v2z:function(Value){gx.O.ZV32bmpNota=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPNOTA",row || gx.fn.currentGridRowImpl(61),gx.O.AV32bmpNota,gx.O.AV44Bmpnota_GXI)},c2v:function(){gx.O.AV44Bmpnota_GXI=this.val_GXI();gx.O.AV32bmpNota=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPNOTA",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPNOTA_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV44Bmpnota_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(61),gx.O.AV7bmpAlt,gx.O.AV41Bmpalt_GXI)},c2v:function(){gx.O.AV41Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV41Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61),gx.O.AV8bmpExc,gx.O.AV42Bmpexc_GXI)},c2v:function(){gx.O.AV42Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV42Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(61),gx.O.AV16bmpCon,gx.O.AV43Bmpcon_GXI)},c2v:function(){gx.O.AV43Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV43Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEID",gxz:"Z4681GNREDAEid",gxold:"O4681GNREDAEid",gxvar:"A4681GNREDAEid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4681GNREDAEid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4681GNREDAEid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GNREDAEID",row || gx.fn.currentGridRowImpl(61),gx.O.A4681GNREDAEid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4681GNREDAEid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GNREDAEID",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEEMPRESAID",gxz:"Z5386GNREDAEEmpresaId",gxold:"O5386GNREDAEEmpresaId",gxvar:"A5386GNREDAEEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5386GNREDAEEmpresaId=Value},v2z:function(Value){gx.O.Z5386GNREDAEEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("GNREDAEEMPRESAID",row || gx.fn.currentGridRowImpl(61),gx.O.A5386GNREDAEEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5386GNREDAEEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAEEMPRESAID",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[80]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNERRO",gxz:"ZV35SnErro",gxold:"OV35SnErro",gxvar:"AV35SnErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35SnErro=Value},v2z:function(Value){gx.O.ZV35SnErro=Value},v2c:function(){gx.fn.setControlValue("vSNERRO",gx.O.AV35SnErro,0)},c2v:function(){gx.O.AV35SnErro=this.val()},val:function(){return gx.fn.getControlValue("vSNERRO")},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27GNREDAETipoFiltro = "" ;
   this.ZV27GNREDAETipoFiltro = "" ;
   this.OV27GNREDAETipoFiltro = "" ;
   this.AV29GNREDAENoDocArrecadacao = "" ;
   this.ZV29GNREDAENoDocArrecadacao = "" ;
   this.OV29GNREDAENoDocArrecadacao = "" ;
   this.AV28GNREDAEUFFavorecido = "" ;
   this.ZV28GNREDAEUFFavorecido = "" ;
   this.OV28GNREDAEUFFavorecido = "" ;
   this.AV30GNREDAEVencimentoIni = gx.date.nullDate() ;
   this.ZV30GNREDAEVencimentoIni = gx.date.nullDate() ;
   this.OV30GNREDAEVencimentoIni = gx.date.nullDate() ;
   this.AV31GNREDAEVencimentoFin = gx.date.nullDate() ;
   this.ZV31GNREDAEVencimentoFin = gx.date.nullDate() ;
   this.OV31GNREDAEVencimentoFin = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5385GNREDAETipo = "" ;
   this.O5385GNREDAETipo = "" ;
   this.Z5388GNREDAEUFFavorecido = "" ;
   this.O5388GNREDAEUFFavorecido = "" ;
   this.Z5398GNREDAENoDocArrecadacao = "" ;
   this.O5398GNREDAENoDocArrecadacao = "" ;
   this.Z5392GNREDAEValor = 0 ;
   this.O5392GNREDAEValor = 0 ;
   this.Z5393GNREDAEVencimento = gx.date.nullDate() ;
   this.O5393GNREDAEVencimento = gx.date.nullDate() ;
   this.Z5395GNREDAEDataPagamento = gx.date.nullDate() ;
   this.O5395GNREDAEDataPagamento = gx.date.nullDate() ;
   this.ZV32bmpNota = "" ;
   this.OV32bmpNota = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z4681GNREDAEid = 0 ;
   this.O4681GNREDAEid = 0 ;
   this.Z5386GNREDAEEmpresaId = "" ;
   this.O5386GNREDAEEmpresaId = "" ;
   this.AV35SnErro = "" ;
   this.ZV35SnErro = "" ;
   this.OV35SnErro = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27GNREDAETipoFiltro = "" ;
   this.AV29GNREDAENoDocArrecadacao = "" ;
   this.AV28GNREDAEUFFavorecido = "" ;
   this.AV30GNREDAEVencimentoIni = gx.date.nullDate() ;
   this.AV31GNREDAEVencimentoFin = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV35SnErro = "" ;
   this.AV11OrderedBy = 0 ;
   this.A5385GNREDAETipo = "" ;
   this.A5388GNREDAEUFFavorecido = "" ;
   this.A5398GNREDAENoDocArrecadacao = "" ;
   this.A5392GNREDAEValor = 0 ;
   this.A5393GNREDAEVencimento = gx.date.nullDate() ;
   this.A5395GNREDAEDataPagamento = gx.date.nullDate() ;
   this.AV32bmpNota = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A4681GNREDAEid = 0 ;
   this.A5386GNREDAEEmpresaId = "" ;
   this.AV33GNREDAEEmpresaId = "" ;
   this.AV36SnRecuperaFiltro = "" ;
   this.AV39Pgmname = "" ;
   this.Events = {"e11ve2_client": ["'ANTERIOR'", true] ,"e12ve2_client": ["'PROXIMO'", true] ,"e16ve2_client": ["VPAGINA.CLICK", true] ,"e13ve2_client": ["'NOVO'", true] ,"e14ve2_client": ["'FECHAR'", true] ,"e15ve2_client": ["'PROCURAR'", true] ,"e19ve2_client": ["'ALTERAR'", true] ,"e20ve2_client": ["'EXCLUIR'", true] ,"e21ve2_client": ["'CONSULTAR'", true] ,"e22ve2_client": ["'NOTAS'", true] ,"e23ve2_client": ["'ATUALIZAPAGINA'", true] ,"e25ve2_client": ["ENTER", true] ,"e26ve2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{ctrl:'GNREDAETIPO'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'GNREDAEUFFAVORECIDO'},{ctrl:'GNREDAENODOCARRECADACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GNREDAENODOCARRECADACAO","Title")',ctrl:'GNREDAENODOCARRECADACAO',prop:'Title'},{ctrl:'GNREDAEVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GNREDAEVALOR","Title")',ctrl:'GNREDAEVALOR',prop:'Title'},{ctrl:'GNREDAEVENCIMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GNREDAEVENCIMENTO","Title")',ctrl:'GNREDAEVENCIMENTO',prop:'Title'},{ctrl:'GNREDAEDATAPAGAMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GNREDAEDATAPAGAMENTO","Title")',ctrl:'GNREDAEDATAPAGAMENTO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A4681GNREDAEid',fld:'GNREDAEID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A4681GNREDAEid',fld:'GNREDAEID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A4681GNREDAEid',fld:'GNREDAEID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A4681GNREDAEid',fld:'GNREDAEID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A4681GNREDAEid',fld:'GNREDAEID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A4681GNREDAEid',fld:'GNREDAEID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOTAS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'A5386GNREDAEEmpresaId',fld:'GNREDAEEMPRESAID'},{av:'A4681GNREDAEid',fld:'GNREDAEID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV29GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV28GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV30GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV31GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV33GNREDAEEmpresaId", "vGNREDAEEMPRESAID", 0, "char");
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV33GNREDAEEmpresaId", "vGNREDAEEMPRESAID", 0, "char");
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar(this.GXValidFnc[82]);
   GridContainer.addRefreshingVar({rfrVar:"AV33GNREDAEEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpNota", rfrProp:"Value", gxAttId:"Bmpnota"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpNota", rfrProp:"Tooltiptext", gxAttId:"Bmpnota"});
   GridContainer.addRefreshingVar({rfrVar:"AV36SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV39Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgnredae());
