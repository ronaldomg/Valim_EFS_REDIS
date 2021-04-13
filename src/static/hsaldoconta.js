/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:54:50.17
*/
gx.evt.autoSkip = false;
gx.define('hsaldoconta', false, function () {
   this.ServerClass =  "hsaldoconta" ;
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
      this.AV35EmpresaPadraoCContabil=gx.fn.getControlValue("vEMPRESAPADRAOCCONTABIL") ;
      this.AV45SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Contacontabilid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(55) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTACONTABILID", gx.fn.currentGridRowImpl(55));
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
   this.Valid_Empresacontacontabilempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(55) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("EMPRESACONTACONTABILEMPRESAID", gx.fn.currentGridRowImpl(55));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e193z2_client=function()
   {
      this.executeServerEvent("'CONSULTALOG'", true, arguments[0], false, false);
   };
   this.e203z2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGCCUS'", true, arguments[0], false, false);
   };
   this.e213z2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGCORRENTISTA'", true, arguments[0], false, false);
   };
   this.e163z2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGGERAL'", true, null, false, false);
   };
   this.e113z2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e123z2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e243z2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e253z2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e263z2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e173z2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e133z2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e143z2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e153z2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e273z2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e283z2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e293z2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,17,19,22,24,25,30,33,36,38,40,42,44,46,49,51,52,56,57,58,59,60,61,62,63,64,65,66,67,68,69,75,76,77,79];
   this.GXLastCtrlId =79;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",55,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsaldoconta",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(62,56,"CONTACONTABILID","","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],62,"ContaContabilId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(63,57,"CONTACONTABILNOME","","","ContaContabilNome","svchar",0,"px",45,45,"left",null,[],63,"ContaContabilNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(536,58,"SALDOCONTADATAREFERENCIA","","","SaldoContaDataReferencia","date",0,"px",10,10,"right",null,[],536,"SaldoContaDataReferencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(525,59,"SALDOCONTATOTALDEBITO","","","SaldoContaTotalDebito","decimal",0,"px",18,18,"right",null,[],525,"SaldoContaTotalDebito",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(526,60,"SALDOCONTATOTALCREDITO","","","SaldoContaTotalCredito","decimal",0,"px",18,18,"right",null,[],526,"SaldoContaTotalCredito",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(527,61,"SALDOCONTASALDOATUAL","","","SaldoContaSaldoAtual","decimal",0,"px",18,18,"right",null,[],527,"SaldoContaSaldoAtual",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmplo1","vBMPLO1",62,0,"px",17,"px","e193z2_client","","Log Conta","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmplo2","vBMPLO2",63,0,"px",17,"px","e203z2_client","","Log C.Custo","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmplo3","vBMPLO3",64,0,"px",17,"px","e213z2_client","","Log Correntista","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",65,0,"px",17,"px","e243z2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",66,0,"px",17,"px","e253z2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",67,0,"px",17,"px","e263z2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(879,68,"SALDOCONTAEMPRESAID","Saldo Conta Empresa Id","","SaldoContaEmpresaId","char",0,"px",10,10,"left",null,[],879,"SaldoContaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(176,69,"EMPRESACONTACONTABILEMPRESAID","Código Empresa Conta Contabil","","EmpresaContaContabilEmpresaId","char",0,"px",10,10,"left",null,[],176,"EmpresaContaContabilEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTACONTABILID",gxz:"ZV24ContaContabilId",gxold:"OV24ContaContabilId",gxvar:"AV24ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ContaContabilId=Value},v2z:function(Value){gx.O.ZV24ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV24ContaContabilId,0)},c2v:function(){gx.O.AV24ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV26ContaContabilNome",gxold:"OV26ContaContabilNome",gxvar:"AV26ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ContaContabilNome=Value},v2z:function(Value){gx.O.ZV26ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV26ContaContabilNome,0)},c2v:function(){gx.O.AV26ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSALDOCONTADATAREFERENCIA",gxz:"ZV25SaldoContaDataReferencia",gxold:"OV25SaldoContaDataReferencia",gxvar:"AV25SaldoContaDataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25SaldoContaDataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25SaldoContaDataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSALDOCONTADATAREFERENCIA",gx.O.AV25SaldoContaDataReferencia,0)},c2v:function(){gx.O.AV25SaldoContaDataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSALDOCONTADATAREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV32ContaContabilTradutor",gxold:"OV32ContaContabilTradutor",gxvar:"AV32ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32ContaContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTOR",gx.O.AV32ContaContabilTradutor,0)},c2v:function(){gx.O.AV32ContaContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLE4",grid:0};
   GXValidFnc[33]={fld:"TABLE6",grid:0};
   GXValidFnc[36]={fld:"IMAGE2",grid:0};
   GXValidFnc[38]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[40]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"BTNLOG",grid:0};
   GXValidFnc[46]={fld:"TABLE5",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:this.Valid_Contacontabilid,isvalid:null,rgrid:[],fld:"CONTACONTABILID",gxz:"Z62ContaContabilId",gxold:"O62ContaContabilId",gxvar:"A62ContaContabilId",ucs:[],op:[57],ip:[57,56,69],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A62ContaContabilId=Value},v2z:function(Value){gx.O.Z62ContaContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(55),gx.O.A62ContaContabilId,0)},c2v:function(){gx.O.A62ContaContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILNOME",gxz:"Z63ContaContabilNome",gxold:"O63ContaContabilNome",gxvar:"A63ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A63ContaContabilNome=Value},v2z:function(Value){gx.O.Z63ContaContabilNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(55),gx.O.A63ContaContabilNome,0)},c2v:function(){gx.O.A63ContaContabilNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOCONTADATAREFERENCIA",gxz:"Z536SaldoContaDataReferencia",gxold:"O536SaldoContaDataReferencia",gxvar:"A536SaldoContaDataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A536SaldoContaDataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z536SaldoContaDataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SALDOCONTADATAREFERENCIA",row || gx.fn.currentGridRowImpl(55),gx.O.A536SaldoContaDataReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A536SaldoContaDataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SALDOCONTADATAREFERENCIA",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOCONTATOTALDEBITO",gxz:"Z525SaldoContaTotalDebito",gxold:"O525SaldoContaTotalDebito",gxvar:"A525SaldoContaTotalDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A525SaldoContaTotalDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z525SaldoContaTotalDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCONTATOTALDEBITO",row || gx.fn.currentGridRowImpl(55),gx.O.A525SaldoContaTotalDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A525SaldoContaTotalDebito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCONTATOTALDEBITO",row || gx.fn.currentGridRowImpl(55),'.',',')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOCONTATOTALCREDITO",gxz:"Z526SaldoContaTotalCredito",gxold:"O526SaldoContaTotalCredito",gxvar:"A526SaldoContaTotalCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A526SaldoContaTotalCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z526SaldoContaTotalCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCONTATOTALCREDITO",row || gx.fn.currentGridRowImpl(55),gx.O.A526SaldoContaTotalCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A526SaldoContaTotalCredito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCONTATOTALCREDITO",row || gx.fn.currentGridRowImpl(55),'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOCONTASALDOATUAL",gxz:"Z527SaldoContaSaldoAtual",gxold:"O527SaldoContaSaldoAtual",gxvar:"A527SaldoContaSaldoAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A527SaldoContaSaldoAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z527SaldoContaSaldoAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCONTASALDOATUAL",row || gx.fn.currentGridRowImpl(55),gx.O.A527SaldoContaSaldoAtual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A527SaldoContaSaldoAtual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCONTASALDOATUAL",row || gx.fn.currentGridRowImpl(55),'.',',')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLO1",gxz:"ZV41bmpLo1",gxold:"OV41bmpLo1",gxvar:"AV41bmpLo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV41bmpLo1=Value},v2z:function(Value){gx.O.ZV41bmpLo1=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLO1",row || gx.fn.currentGridRowImpl(55),gx.O.AV41bmpLo1,gx.O.AV53Bmplo1_GXI)},c2v:function(){gx.O.AV53Bmplo1_GXI=this.val_GXI();gx.O.AV41bmpLo1=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLO1",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLO1_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV53Bmplo1_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLO2",gxz:"ZV42bmpLo2",gxold:"OV42bmpLo2",gxvar:"AV42bmpLo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV42bmpLo2=Value},v2z:function(Value){gx.O.ZV42bmpLo2=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLO2",row || gx.fn.currentGridRowImpl(55),gx.O.AV42bmpLo2,gx.O.AV54Bmplo2_GXI)},c2v:function(){gx.O.AV54Bmplo2_GXI=this.val_GXI();gx.O.AV42bmpLo2=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLO2",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLO2_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV54Bmplo2_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLO3",gxz:"ZV43bmpLo3",gxold:"OV43bmpLo3",gxvar:"AV43bmpLo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV43bmpLo3=Value},v2z:function(Value){gx.O.ZV43bmpLo3=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLO3",row || gx.fn.currentGridRowImpl(55),gx.O.AV43bmpLo3,gx.O.AV55Bmplo3_GXI)},c2v:function(){gx.O.AV55Bmplo3_GXI=this.val_GXI();gx.O.AV43bmpLo3=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLO3",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLO3_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV55Bmplo3_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(55),gx.O.AV7bmpAlt,gx.O.AV50Bmpalt_GXI)},c2v:function(){gx.O.AV50Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV50Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(55),gx.O.AV8bmpExc,gx.O.AV51Bmpexc_GXI)},c2v:function(){gx.O.AV51Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV51Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(55),gx.O.AV16bmpCon,gx.O.AV52Bmpcon_GXI)},c2v:function(){gx.O.AV52Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV52Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOCONTAEMPRESAID",gxz:"Z879SaldoContaEmpresaId",gxold:"O879SaldoContaEmpresaId",gxvar:"A879SaldoContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A879SaldoContaEmpresaId=Value},v2z:function(Value){gx.O.Z879SaldoContaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SALDOCONTAEMPRESAID",row || gx.fn.currentGridRowImpl(55),gx.O.A879SaldoContaEmpresaId,0)},c2v:function(){gx.O.A879SaldoContaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SALDOCONTAEMPRESAID",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:this.Valid_Empresacontacontabilempresaid,isvalid:null,rgrid:[],fld:"EMPRESACONTACONTABILEMPRESAID",gxz:"Z176EmpresaContaContabilEmpresaId",gxold:"O176EmpresaContaContabilEmpresaId",gxvar:"A176EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A176EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.Z176EmpresaContaContabilEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(55),gx.O.A176EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.A176EmpresaContaContabilEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[75]={fld:"JS", format:2,grid:0};
   GXValidFnc[76]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV36ChamaOnBlurMascara",gxold:"OV36ChamaOnBlurMascara",gxvar:"AV36ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV36ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV36ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV36ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   this.AV24ContaContabilId = "" ;
   this.ZV24ContaContabilId = "" ;
   this.OV24ContaContabilId = "" ;
   this.AV26ContaContabilNome = "" ;
   this.ZV26ContaContabilNome = "" ;
   this.OV26ContaContabilNome = "" ;
   this.AV25SaldoContaDataReferencia = gx.date.nullDate() ;
   this.ZV25SaldoContaDataReferencia = gx.date.nullDate() ;
   this.OV25SaldoContaDataReferencia = gx.date.nullDate() ;
   this.AV32ContaContabilTradutor = 0 ;
   this.ZV32ContaContabilTradutor = 0 ;
   this.OV32ContaContabilTradutor = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z62ContaContabilId = "" ;
   this.O62ContaContabilId = "" ;
   this.Z63ContaContabilNome = "" ;
   this.O63ContaContabilNome = "" ;
   this.Z536SaldoContaDataReferencia = gx.date.nullDate() ;
   this.O536SaldoContaDataReferencia = gx.date.nullDate() ;
   this.Z525SaldoContaTotalDebito = 0 ;
   this.O525SaldoContaTotalDebito = 0 ;
   this.Z526SaldoContaTotalCredito = 0 ;
   this.O526SaldoContaTotalCredito = 0 ;
   this.Z527SaldoContaSaldoAtual = 0 ;
   this.O527SaldoContaSaldoAtual = 0 ;
   this.ZV41bmpLo1 = "" ;
   this.OV41bmpLo1 = "" ;
   this.ZV42bmpLo2 = "" ;
   this.OV42bmpLo2 = "" ;
   this.ZV43bmpLo3 = "" ;
   this.OV43bmpLo3 = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z879SaldoContaEmpresaId = "" ;
   this.O879SaldoContaEmpresaId = "" ;
   this.Z176EmpresaContaContabilEmpresaId = "" ;
   this.O176EmpresaContaContabilEmpresaId = "" ;
   this.AV36ChamaOnBlurMascara = "" ;
   this.ZV36ChamaOnBlurMascara = "" ;
   this.OV36ChamaOnBlurMascara = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV24ContaContabilId = "" ;
   this.AV26ContaContabilNome = "" ;
   this.AV25SaldoContaDataReferencia = gx.date.nullDate() ;
   this.AV32ContaContabilTradutor = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV36ChamaOnBlurMascara = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.A62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A536SaldoContaDataReferencia = gx.date.nullDate() ;
   this.A525SaldoContaTotalDebito = 0 ;
   this.A526SaldoContaTotalCredito = 0 ;
   this.A527SaldoContaSaldoAtual = 0 ;
   this.AV41bmpLo1 = "" ;
   this.AV42bmpLo2 = "" ;
   this.AV43bmpLo3 = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A879SaldoContaEmpresaId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.AV35EmpresaPadraoCContabil = "" ;
   this.AV45SnRecuperaFiltro = "" ;
   this.Events = {"e193z2_client": ["'CONSULTALOG'", true] ,"e203z2_client": ["'CONSULTALOGCCUS'", true] ,"e213z2_client": ["'CONSULTALOGCORRENTISTA'", true] ,"e163z2_client": ["'CONSULTALOGGERAL'", true] ,"e113z2_client": ["'ANTERIOR'", true] ,"e123z2_client": ["'PROXIMO'", true] ,"e243z2_client": ["'ALTERAR'", true] ,"e253z2_client": ["'EXCLUIR'", true] ,"e263z2_client": ["'CONSULTAR'", true] ,"e173z2_client": ["VPAGINA.CLICK", true] ,"e133z2_client": ["'NOVO'", true] ,"e143z2_client": ["'FECHAR'", true] ,"e153z2_client": ["'PROCURAR'", true] ,"e273z2_client": ["'ATUALIZAPAGINA'", true] ,"e283z2_client": ["ENTER", true] ,"e293z2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV25SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["'CONSULTALOG'"] = [[{av:'A879SaldoContaEmpresaId',fld:'SALDOCONTAEMPRESAID'},{av:'AV44Log',fld:'vLOG'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A536SaldoContaDataReferencia',fld:'SALDOCONTADATAREFERENCIA'}],[{av:'AV44Log',fld:'vLOG'}]];
   this.EvtParms["'CONSULTALOGCCUS'"] = [[{av:'A879SaldoContaEmpresaId',fld:'SALDOCONTAEMPRESAID'},{av:'AV44Log',fld:'vLOG'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A536SaldoContaDataReferencia',fld:'SALDOCONTADATAREFERENCIA'}],[{av:'AV44Log',fld:'vLOG'}]];
   this.EvtParms["'CONSULTALOGCORRENTISTA'"] = [[{av:'A879SaldoContaEmpresaId',fld:'SALDOCONTAEMPRESAID'},{av:'AV44Log',fld:'vLOG'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A536SaldoContaDataReferencia',fld:'SALDOCONTADATAREFERENCIA'}],[{av:'AV44Log',fld:'vLOG'}]];
   this.EvtParms["'CONSULTALOGGERAL'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'}],[{av:'AV44Log',fld:'vLOG'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV25SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'CONTACONTABILID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTACONTABILID","Title")',ctrl:'CONTACONTABILID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONTACONTABILNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTACONTABILNOME","Title")',ctrl:'CONTACONTABILNOME',prop:'Title'},{ctrl:'SALDOCONTADATAREFERENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SALDOCONTADATAREFERENCIA","Title")',ctrl:'SALDOCONTADATAREFERENCIA',prop:'Title'},{ctrl:'SALDOCONTATOTALDEBITO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SALDOCONTATOTALDEBITO","Title")',ctrl:'SALDOCONTATOTALDEBITO',prop:'Title'},{ctrl:'SALDOCONTATOTALCREDITO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SALDOCONTATOTALCREDITO","Title")',ctrl:'SALDOCONTATOTALCREDITO',prop:'Title'},{ctrl:'SALDOCONTASALDOATUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SALDOCONTASALDOATUAL","Title")',ctrl:'SALDOCONTASALDOATUAL',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV30filtros',fld:'vFILTROS'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV25SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV25SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV30filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV25SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV30filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41bmpLo1',fld:'vBMPLO1'},{av:'gx.fn.getCtrlProperty("vBMPLO1","Tooltiptext")',ctrl:'vBMPLO1',prop:'Tooltiptext'},{av:'AV42bmpLo2',fld:'vBMPLO2'},{av:'gx.fn.getCtrlProperty("vBMPLO2","Tooltiptext")',ctrl:'vBMPLO2',prop:'Tooltiptext'},{av:'AV43bmpLo3',fld:'vBMPLO3'},{av:'gx.fn.getCtrlProperty("vBMPLO3","Tooltiptext")',ctrl:'vBMPLO3',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A536SaldoContaDataReferencia',fld:'SALDOCONTADATAREFERENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV25SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A536SaldoContaDataReferencia',fld:'SALDOCONTADATAREFERENCIA'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV30filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A536SaldoContaDataReferencia',fld:'SALDOCONTADATAREFERENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV25SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A536SaldoContaDataReferencia',fld:'SALDOCONTADATAREFERENCIA'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV30filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A536SaldoContaDataReferencia',fld:'SALDOCONTADATAREFERENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV25SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A536SaldoContaDataReferencia',fld:'SALDOCONTADATAREFERENCIA'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV30filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV25SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV30filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'Gx_date',fld:'vTODAY'}],[{av:'AV22Data',fld:'vDATA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV25SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("GRID","Visible")',ctrl:'GRID',prop:'Visible'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV30filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV25SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setPrompt("IMAGE1", [16,25]);
   this.setVCMap("AV35EmpresaPadraoCContabil", "vEMPRESAPADRAOCCONTABIL", 0, "char");
   this.setVCMap("AV45SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35EmpresaPadraoCContabil", "vEMPRESAPADRAOCCONTABIL", 0, "char");
   this.setVCMap("AV45SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar({rfrVar:"AV35EmpresaPadraoCContabil"});
   GridContainer.addRefreshingVar({rfrVar:"AV45SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsaldoconta());
