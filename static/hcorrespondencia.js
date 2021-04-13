/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:25:28.94
*/
gx.evt.autoSkip = false;
gx.define('hcorrespondencia', false, function () {
   this.ServerClass =  "hcorrespondencia" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV39SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A1685ContaPagRecEmpresaId=gx.fn.getControlValue("CONTAPAGRECEMPRESAID") ;
      this.A1686ContaPagRecNumero=gx.fn.getIntegerValue("CONTAPAGRECNUMERO",'.') ;
      this.AV44NoConta=gx.fn.getIntegerValue("vNOCONTA",'.') ;
      this.A1638ContaPagRecCliForFantasia=gx.fn.getControlValue("CONTAPAGRECCLIFORFANTASIA") ;
      this.A1701ContaPagRecDtVencimento=gx.fn.getDateValue("CONTAPAGRECDTVENCIMENTO") ;
   };
   this.Validv_Departamentocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPARTAMENTOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11do2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12do2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16do2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13do2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14do2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15do2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19do2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20do2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21do2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22do2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24do2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25do2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,30,33,35,36,41,44,47,49,51,53,55,58,60,64,65,66,67,68,69,70,71,72,73,79,81,82,83,84];
   this.GXLastCtrlId =84;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",63,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcorrespondencia",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2273,64,"CORRESPONDENCIAPROTOCOLO","","","CorrespondenciaProtocolo","int",0,"px",7,7,"right",null,[],2273,"CorrespondenciaProtocolo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2275,65,"CORRESPONDENCIAIDENTIFICACAO","","","CorrespondenciaIdentificacao","char",0,"px",10,10,"left",null,[],2275,"CorrespondenciaIdentificacao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2277,66,"CORRESPONDENCIADATAHORA","","","CorrespondenciaDataHora","dtime",0,"px",16,16,"left",null,[],2277,"CorrespondenciaDataHora",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2248,67,"DEPARTAMENTOCODIGO","Depto","","DepartamentoCodigo","svchar",0,"px",15,15,"left",null,[],2248,"DepartamentoCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2274,68,"CORRESPONDENCIAREMETENTE","Remetente","","CorrespondenciaRemetente","svchar",0,"px",50,50,"left",null,[],2274,"CorrespondenciaRemetente",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Remetente",69,"vREMETENTE","Remetente","","Remetente","svchar",0,"px",50,50,"left",null,[],"Remetente","Remetente",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Contapagrecdtvencimento",70,"vCONTAPAGRECDTVENCIMENTO","Data de Vencimento","","ContaPagRecDtVencimento","char",0,"px",10,10,"left",null,[],"Contapagrecdtvencimento","ContaPagRecDtVencimento",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",71,0,"px",17,"px","e19do2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",72,0,"px",17,"px","e20do2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",73,0,"px",17,"px","e21do2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCORRESPONDENCIAANO",gxz:"ZV27CorrespondenciaAno",gxold:"OV27CorrespondenciaAno",gxvar:"AV27CorrespondenciaAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27CorrespondenciaAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27CorrespondenciaAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAANO",gx.O.AV27CorrespondenciaAno,0)},c2v:function(){gx.O.AV27CorrespondenciaAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRESPONDENCIAANO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCORRESPONDENCIAPROTOCOLO",gxz:"ZV28CorrespondenciaProtocolo",gxold:"OV28CorrespondenciaProtocolo",gxvar:"AV28CorrespondenciaProtocolo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28CorrespondenciaProtocolo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28CorrespondenciaProtocolo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAPROTOCOLO",gx.O.AV28CorrespondenciaProtocolo,0)},c2v:function(){gx.O.AV28CorrespondenciaProtocolo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRESPONDENCIAPROTOCOLO",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE10",grid:0};
   GXValidFnc[26]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCORRESPONDENCIADATAHORAINICIAL",gxz:"ZV29CorrespondenciaDataHoraInicial",gxold:"OV29CorrespondenciaDataHoraInicial",gxvar:"AV29CorrespondenciaDataHoraInicial",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29CorrespondenciaDataHoraInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29CorrespondenciaDataHoraInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIADATAHORAINICIAL",gx.O.AV29CorrespondenciaDataHoraInicial,0)},c2v:function(){gx.O.AV29CorrespondenciaDataHoraInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCORRESPONDENCIADATAHORAINICIAL")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCORRESPONDENCIADATAHORAFINAL",gxz:"ZV30CorrespondenciaDataHoraFinal",gxold:"OV30CorrespondenciaDataHoraFinal",gxvar:"AV30CorrespondenciaDataHoraFinal",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30CorrespondenciaDataHoraFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30CorrespondenciaDataHoraFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIADATAHORAFINAL",gx.O.AV30CorrespondenciaDataHoraFinal,0)},c2v:function(){gx.O.AV30CorrespondenciaDataHoraFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCORRESPONDENCIADATAHORAFINAL")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Departamentocodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPARTAMENTOCODIGO",gxz:"ZV32DepartamentoCodigo",gxold:"OV32DepartamentoCodigo",gxvar:"AV32DepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32DepartamentoCodigo=Value},v2z:function(Value){gx.O.ZV32DepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTOCODIGO",gx.O.AV32DepartamentoCodigo,0)},c2v:function(){gx.O.AV32DepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPARTAMENTONOME",gxz:"ZV35DepartamentoNome",gxold:"OV35DepartamentoNome",gxvar:"AV35DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35DepartamentoNome=Value},v2z:function(Value){gx.O.ZV35DepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTONOME",gx.O.AV35DepartamentoNome,0)},c2v:function(){gx.O.AV35DepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLE4",grid:0};
   GXValidFnc[44]={fld:"TABLE6",grid:0};
   GXValidFnc[47]={fld:"IMAGE2",grid:0};
   GXValidFnc[49]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[51]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[53]={fld:"BTNHELP",grid:0};
   GXValidFnc[55]={fld:"TABLE5",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAPROTOCOLO",gxz:"Z2273CorrespondenciaProtocolo",gxold:"O2273CorrespondenciaProtocolo",gxvar:"A2273CorrespondenciaProtocolo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2273CorrespondenciaProtocolo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2273CorrespondenciaProtocolo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CORRESPONDENCIAPROTOCOLO",row || gx.fn.currentGridRowImpl(63),gx.O.A2273CorrespondenciaProtocolo,0)},c2v:function(){gx.O.A2273CorrespondenciaProtocolo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CORRESPONDENCIAPROTOCOLO",row || gx.fn.currentGridRowImpl(63),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAIDENTIFICACAO",gxz:"Z2275CorrespondenciaIdentificacao",gxold:"O2275CorrespondenciaIdentificacao",gxvar:"A2275CorrespondenciaIdentificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2275CorrespondenciaIdentificacao=Value},v2z:function(Value){gx.O.Z2275CorrespondenciaIdentificacao=Value},v2c:function(row){gx.fn.setGridControlValue("CORRESPONDENCIAIDENTIFICACAO",row || gx.fn.currentGridRowImpl(63),gx.O.A2275CorrespondenciaIdentificacao,0)},c2v:function(){gx.O.A2275CorrespondenciaIdentificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CORRESPONDENCIAIDENTIFICACAO",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIADATAHORA",gxz:"Z2277CorrespondenciaDataHora",gxold:"O2277CorrespondenciaDataHora",gxvar:"A2277CorrespondenciaDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2277CorrespondenciaDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2277CorrespondenciaDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CORRESPONDENCIADATAHORA",row || gx.fn.currentGridRowImpl(63),gx.O.A2277CorrespondenciaDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2277CorrespondenciaDataHora=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CORRESPONDENCIADATAHORA",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTOCODIGO",gxz:"Z2248DepartamentoCodigo",gxold:"O2248DepartamentoCodigo",gxvar:"A2248DepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2248DepartamentoCodigo=Value},v2z:function(Value){gx.O.Z2248DepartamentoCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("DEPARTAMENTOCODIGO",row || gx.fn.currentGridRowImpl(63),gx.O.A2248DepartamentoCodigo,0)},c2v:function(){gx.O.A2248DepartamentoCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPARTAMENTOCODIGO",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAREMETENTE",gxz:"Z2274CorrespondenciaRemetente",gxold:"O2274CorrespondenciaRemetente",gxvar:"A2274CorrespondenciaRemetente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2274CorrespondenciaRemetente=Value},v2z:function(Value){gx.O.Z2274CorrespondenciaRemetente=Value},v2c:function(row){gx.fn.setGridControlValue("CORRESPONDENCIAREMETENTE",row || gx.fn.currentGridRowImpl(63),gx.O.A2274CorrespondenciaRemetente,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2274CorrespondenciaRemetente=this.val()},val:function(row){return gx.fn.getGridControlValue("CORRESPONDENCIAREMETENTE",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vREMETENTE",gxz:"ZV45Remetente",gxold:"OV45Remetente",gxvar:"AV45Remetente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV45Remetente=Value},v2z:function(Value){gx.O.ZV45Remetente=Value},v2c:function(row){gx.fn.setGridControlValue("vREMETENTE",row || gx.fn.currentGridRowImpl(63),gx.O.AV45Remetente,0)},c2v:function(){gx.O.AV45Remetente=this.val()},val:function(row){return gx.fn.getGridControlValue("vREMETENTE",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTO",gxz:"ZV48ContaPagRecDtVencimento",gxold:"OV48ContaPagRecDtVencimento",gxvar:"AV48ContaPagRecDtVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV48ContaPagRecDtVencimento=Value},v2z:function(Value){gx.O.ZV48ContaPagRecDtVencimento=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(63),gx.O.AV48ContaPagRecDtVencimento,0)},c2v:function(){gx.O.AV48ContaPagRecDtVencimento=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(63),gx.O.AV7bmpAlt,gx.O.AV53Bmpalt_GXI)},c2v:function(){gx.O.AV53Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV53Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(63),gx.O.AV8bmpExc,gx.O.AV54Bmpexc_GXI)},c2v:function(){gx.O.AV54Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV54Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(63),gx.O.AV16bmpCon,gx.O.AV55Bmpcon_GXI)},c2v:function(){gx.O.AV55Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV55Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"JS", format:2,grid:0};
   GXValidFnc[82]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESADEPARTAMENTO",gxz:"ZV31EmpresaDepartamento",gxold:"OV31EmpresaDepartamento",gxvar:"AV31EmpresaDepartamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EmpresaDepartamento=Value},v2z:function(Value){gx.O.ZV31EmpresaDepartamento=Value},v2c:function(){gx.fn.setControlValue("vEMPRESADEPARTAMENTO",gx.O.AV31EmpresaDepartamento,0)},c2v:function(){gx.O.AV31EmpresaDepartamento=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESADEPARTAMENTO")},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAG",gxz:"ZV41QtdePag",gxold:"OV41QtdePag",gxvar:"AV41QtdePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41QtdePag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41QtdePag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAG",gx.O.AV41QtdePag,0)},c2v:function(){gx.O.AV41QtdePag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAG",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"PROMPT_DEPARTAMENTOCODIGO",grid:0};
   this.AV27CorrespondenciaAno = 0 ;
   this.ZV27CorrespondenciaAno = 0 ;
   this.OV27CorrespondenciaAno = 0 ;
   this.AV28CorrespondenciaProtocolo = 0 ;
   this.ZV28CorrespondenciaProtocolo = 0 ;
   this.OV28CorrespondenciaProtocolo = 0 ;
   this.AV29CorrespondenciaDataHoraInicial = gx.date.nullDate() ;
   this.ZV29CorrespondenciaDataHoraInicial = gx.date.nullDate() ;
   this.OV29CorrespondenciaDataHoraInicial = gx.date.nullDate() ;
   this.AV30CorrespondenciaDataHoraFinal = gx.date.nullDate() ;
   this.ZV30CorrespondenciaDataHoraFinal = gx.date.nullDate() ;
   this.OV30CorrespondenciaDataHoraFinal = gx.date.nullDate() ;
   this.AV32DepartamentoCodigo = "" ;
   this.ZV32DepartamentoCodigo = "" ;
   this.OV32DepartamentoCodigo = "" ;
   this.AV35DepartamentoNome = "" ;
   this.ZV35DepartamentoNome = "" ;
   this.OV35DepartamentoNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.Z2273CorrespondenciaProtocolo = 0 ;
   this.O2273CorrespondenciaProtocolo = 0 ;
   this.Z2275CorrespondenciaIdentificacao = "" ;
   this.O2275CorrespondenciaIdentificacao = "" ;
   this.Z2277CorrespondenciaDataHora = gx.date.nullDate() ;
   this.O2277CorrespondenciaDataHora = gx.date.nullDate() ;
   this.Z2248DepartamentoCodigo = "" ;
   this.O2248DepartamentoCodigo = "" ;
   this.Z2274CorrespondenciaRemetente = "" ;
   this.O2274CorrespondenciaRemetente = "" ;
   this.ZV45Remetente = "" ;
   this.OV45Remetente = "" ;
   this.ZV48ContaPagRecDtVencimento = "" ;
   this.OV48ContaPagRecDtVencimento = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV31EmpresaDepartamento = "" ;
   this.ZV31EmpresaDepartamento = "" ;
   this.OV31EmpresaDepartamento = "" ;
   this.AV41QtdePag = 0 ;
   this.ZV41QtdePag = 0 ;
   this.OV41QtdePag = 0 ;
   this.AV27CorrespondenciaAno = 0 ;
   this.AV28CorrespondenciaProtocolo = 0 ;
   this.AV29CorrespondenciaDataHoraInicial = gx.date.nullDate() ;
   this.AV30CorrespondenciaDataHoraFinal = gx.date.nullDate() ;
   this.AV32DepartamentoCodigo = "" ;
   this.AV35DepartamentoNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV31EmpresaDepartamento = "" ;
   this.AV41QtdePag = 0 ;
   this.A2272CorrespondenciaAno = 0 ;
   this.A2271CorrespondenciaEmpresaId = "" ;
   this.A2273CorrespondenciaProtocolo = 0 ;
   this.A2275CorrespondenciaIdentificacao = "" ;
   this.A2277CorrespondenciaDataHora = gx.date.nullDate() ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2274CorrespondenciaRemetente = "" ;
   this.AV45Remetente = "" ;
   this.AV48ContaPagRecDtVencimento = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV39SnRecuperaFiltro = "" ;
   this.AV44NoConta = 0 ;
   this.Events = {"e11do2_client": ["'ANTERIOR'", true] ,"e12do2_client": ["'PROXIMO'", true] ,"e16do2_client": ["VPAGINA.CLICK", true] ,"e13do2_client": ["'NOVO'", true] ,"e14do2_client": ["'FECHAR'", true] ,"e15do2_client": ["'PROCURAR'", true] ,"e19do2_client": ["'ALTERAR'", true] ,"e20do2_client": ["'EXCLUIR'", true] ,"e21do2_client": ["'CONSULTAR'", true] ,"e22do2_client": ["'ATUALIZAPAGINA'", true] ,"e24do2_client": ["ENTER", true] ,"e25do2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2274CorrespondenciaRemetente',fld:'CORRESPONDENCIAREMETENTE'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV44NoConta',fld:'vNOCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2274CorrespondenciaRemetente',fld:'CORRESPONDENCIAREMETENTE'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV44NoConta',fld:'vNOCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'}],[{ctrl:'CORRESPONDENCIAPROTOCOLO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CORRESPONDENCIAPROTOCOLO","Title")',ctrl:'CORRESPONDENCIAPROTOCOLO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CORRESPONDENCIAIDENTIFICACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CORRESPONDENCIAIDENTIFICACAO","Title")',ctrl:'CORRESPONDENCIAIDENTIFICACAO',prop:'Title'},{ctrl:'CORRESPONDENCIADATAHORA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CORRESPONDENCIADATAHORA","Title")',ctrl:'CORRESPONDENCIADATAHORA',prop:'Title'},{av:'AV40QtdeLinGrid',fld:'vQTDELINGRID'},{av:'AV42Res',fld:'vRES'},{av:'AV43ResInt',fld:'vRESINT'},{av:'AV41QtdePag',fld:'vQTDEPAG'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV35DepartamentoNome',fld:'vDEPARTAMENTONOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2274CorrespondenciaRemetente',fld:'CORRESPONDENCIAREMETENTE'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV44NoConta',fld:'vNOCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV35DepartamentoNome',fld:'vDEPARTAMENTONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2274CorrespondenciaRemetente',fld:'CORRESPONDENCIAREMETENTE'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV44NoConta',fld:'vNOCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV41QtdePag',fld:'vQTDEPAG'},{av:'AV35DepartamentoNome',fld:'vDEPARTAMENTONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2274CorrespondenciaRemetente',fld:'CORRESPONDENCIAREMETENTE'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV44NoConta',fld:'vNOCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV35DepartamentoNome',fld:'vDEPARTAMENTONOME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'A2273CorrespondenciaProtocolo',fld:'CORRESPONDENCIAPROTOCOLO'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'A2271CorrespondenciaEmpresaId',fld:'CORRESPONDENCIAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35DepartamentoNome',fld:'vDEPARTAMENTONOME'}],[{av:'A2273CorrespondenciaProtocolo',fld:'CORRESPONDENCIAPROTOCOLO'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV56GXLvl273',fld:'vGXLVL273'},{av:'AV57GXLvl292',fld:'vGXLVL292'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2274CorrespondenciaRemetente',fld:'CORRESPONDENCIAREMETENTE'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV44NoConta',fld:'vNOCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'A2271CorrespondenciaEmpresaId',fld:'CORRESPONDENCIAEMPRESAID'},{av:'A2273CorrespondenciaProtocolo',fld:'CORRESPONDENCIAPROTOCOLO'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV35DepartamentoNome',fld:'vDEPARTAMENTONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV56GXLvl273',fld:'vGXLVL273'},{av:'AV57GXLvl292',fld:'vGXLVL292'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'A2273CorrespondenciaProtocolo',fld:'CORRESPONDENCIAPROTOCOLO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV35DepartamentoNome',fld:'vDEPARTAMENTONOME'}],[{av:'A2273CorrespondenciaProtocolo',fld:'CORRESPONDENCIAPROTOCOLO'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'A2273CorrespondenciaProtocolo',fld:'CORRESPONDENCIAPROTOCOLO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV35DepartamentoNome',fld:'vDEPARTAMENTONOME'}],[{av:'A2273CorrespondenciaProtocolo',fld:'CORRESPONDENCIAPROTOCOLO'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'A2273CorrespondenciaProtocolo',fld:'CORRESPONDENCIAPROTOCOLO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV35DepartamentoNome',fld:'vDEPARTAMENTONOME'}],[{av:'A2273CorrespondenciaProtocolo',fld:'CORRESPONDENCIAPROTOCOLO'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV28CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'AV29CorrespondenciaDataHoraInicial',fld:'vCORRESPONDENCIADATAHORAINICIAL'},{av:'AV30CorrespondenciaDataHoraFinal',fld:'vCORRESPONDENCIADATAHORAFINAL'},{av:'AV32DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2274CorrespondenciaRemetente',fld:'CORRESPONDENCIAREMETENTE'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV44NoConta',fld:'vNOCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2274CorrespondenciaRemetente',fld:'CORRESPONDENCIAREMETENTE'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV44NoConta',fld:'vNOCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'}],[{av:'AV47CorrespondenciaRemetente',fld:'vCORRESPONDENCIAREMETENTE'},{av:'AV44NoConta',fld:'vNOCONTA'},{av:'AV48ContaPagRecDtVencimento',fld:'vCONTAPAGRECDTVENCIMENTO'},{av:'AV45Remetente',fld:'vREMETENTE'}]];
   this.setPrompt("PROMPT_DEPARTAMENTOCODIGO", [35]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("A1686ContaPagRecNumero", "CONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV44NoConta", "vNOCONTA", 0, "int");
   this.setVCMap("A1638ContaPagRecCliForFantasia", "CONTAPAGRECCLIFORFANTASIA", 0, "svchar");
   this.setVCMap("A1701ContaPagRecDtVencimento", "CONTAPAGRECDTVENCIMENTO", 0, "date");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("A1686ContaPagRecNumero", "CONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV44NoConta", "vNOCONTA", 0, "int");
   this.setVCMap("A1638ContaPagRecCliForFantasia", "CONTAPAGRECCLIFORFANTASIA", 0, "svchar");
   this.setVCMap("A1701ContaPagRecDtVencimento", "CONTAPAGRECDTVENCIMENTO", 0, "date");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV39SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2274CorrespondenciaRemetente", rfrProp:"Value", gxAttId:"2274"});
   GridContainer.addRefreshingVar({rfrVar:"A1685ContaPagRecEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A1686ContaPagRecNumero"});
   GridContainer.addRefreshingVar({rfrVar:"AV44NoConta"});
   GridContainer.addRefreshingVar({rfrVar:"A1638ContaPagRecCliForFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A1701ContaPagRecDtVencimento"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcorrespondencia());
