/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:8:45.57
*/
gx.evt.autoSkip = false;
gx.define('hemiteetiquetaprocessoconv', false, function () {
   this.ServerClass =  "hemiteetiquetaprocessoconv" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV40SnMarcar=gx.fn.getControlValue("vSNMARCAR") ;
   };
   this.Validv_Processoconvanoadd=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVANOADD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Processoconvnumeroadd=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVNUMEROADD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Processoconvempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      this.AV30SnErro =  ""  ;
      if ( this.AV28LinhaIni > 10 )
      {
         this.addMessage("Linha inválida");
         gx.fn.usrSetFocus("vLINHAINI") ;
      }
      else
      {
         if ( this.AV29ColunaIni > 3 )
         {
            this.addMessage("Coluna inválida");
            gx.fn.usrSetFocus("vCOLUNAINI") ;
         }
         else
         {
            this.AV30SnErro =  "N"  ;
         }
      }
   };
   this.s132_client=function()
   {
      this.AV53TpErro = gx.num.trunc( 0 ,0) ;
      if ( (0==this.AV42ProcessoConvAnoAdd) && (0==this.AV43ProcessoConvNumeroAdd) && (0==this.AV37AnoProcesso) && (new gx.date.gxdate("").compare(this.AV46DataIni)==0) && (new gx.date.gxdate("").compare(this.AV47DataFim)==0) )
      {
         this.addMessage("Informe algumas das opções de seleção");
         gx.fn.usrSetFocus("vPROCESSOCONVANOADD") ;
         this.AV53TpErro = gx.num.trunc( 1 ,0) ;
      }
      if ( this.AV53TpErro == 0 )
      {
         if ( new gx.date.gxdate( this.AV46DataIni ).compare( this.AV47DataFim ) > 0 )
         {
            this.addMessage("Data inicial deve ser menor ou igual a data final");
            gx.fn.usrSetFocus("vDATAINI") ;
            this.AV53TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
   };
   this.e11sh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12sh2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13sh2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e14sh2_client=function()
   {
      this.executeServerEvent("'ADICIONARPROCESSO'", true, null, false, false);
   };
   this.e15sh2_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e16sh2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e19sh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,22,24,27,29,34,37,40,42,45,47,49,51,53,58,60,68,70,73,75,77,80,82,83,84,85,86,87,88,89,96,99,101];
   this.GXLastCtrlId =101;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",81,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hemiteetiquetaprocessoconv",[],false,1,true,true,0,false,false,false,"CollSdtEtqProcessoConv.SdtEtqProcessoConvItem",0,"px","Novo registro",false,false,true,null,null,false,"AV24SdtGrid",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addCheckBox("Check",82,"vCHECK","","","Check","char","S","N",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit("GXV12B",83,"CTLPROCESSOCONVANO","Ano","","ProcessoconvAno","int",40,"px",4,4,"right",null,[],"GXV12B","GXV12B",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12C",84,"CTLPROCESSOCONVNUMERO","Número","","ProcessoConvNumero","int",80,"px",8,8,"right",null,[],"GXV12C","GXV12C",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12D",85,"CTLPROCESSOCONVDATAINICIO","Data Início","","ProcessoConvDataInicio","date",0,"px",10,10,"right",null,[],"GXV12D","GXV12D",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12E",86,"CTLPROCESSOCONVFINALIDADE","Finalidade","","ProcessoConvFinalidade","svchar",0,"px",100,80,"left",null,[],"GXV12E","GXV12E",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12F",87,"CTLPROCESSOCONVFORNECFANTASIA","Processo Conv Fornec Fantasia","","ProcessoConvFornecFantasia","svchar",0,"px",60,60,"left",null,[],"GXV12F","GXV12F",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12G",88,"CTLCONTADOR","Contador","","Contador","int",0,"px",4,4,"right",null,[],"GXV12G","GXV12G",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE6",grid:0};
   GXValidFnc[15]={fld:"TABLE3",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLINHAINI",gxz:"ZV28LinhaIni",gxold:"OV28LinhaIni",gxvar:"AV28LinhaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28LinhaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28LinhaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLINHAINI",gx.O.AV28LinhaIni,0)},c2v:function(){gx.O.AV28LinhaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLINHAINI",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOLUNAINI",gxz:"ZV29ColunaIni",gxold:"OV29ColunaIni",gxvar:"AV29ColunaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ColunaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ColunaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOLUNAINI",gx.O.AV29ColunaIni,0)},c2v:function(){gx.O.AV29ColunaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOLUNAINI",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLE4",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLE5",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Processoconvanoadd,isvalid:null,rgrid:[],fld:"vPROCESSOCONVANOADD",gxz:"ZV42ProcessoConvAnoAdd",gxold:"OV42ProcessoConvAnoAdd",gxvar:"AV42ProcessoConvAnoAdd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ProcessoConvAnoAdd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42ProcessoConvAnoAdd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVANOADD",gx.O.AV42ProcessoConvAnoAdd,0)},c2v:function(){gx.O.AV42ProcessoConvAnoAdd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVANOADD",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Processoconvnumeroadd,isvalid:null,rgrid:[],fld:"vPROCESSOCONVNUMEROADD",gxz:"ZV43ProcessoConvNumeroAdd",gxold:"OV43ProcessoConvNumeroAdd",gxvar:"AV43ProcessoConvNumeroAdd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ProcessoConvNumeroAdd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43ProcessoConvNumeroAdd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVNUMEROADD",gx.O.AV43ProcessoConvNumeroAdd,0)},c2v:function(){gx.O.AV43ProcessoConvNumeroAdd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVNUMEROADD",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPBUSCAPROCESSO",gxz:"ZV44bmpBuscaProcesso",gxold:"OV44bmpBuscaProcesso",gxvar:"AV44bmpBuscaProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44bmpBuscaProcesso=Value},v2z:function(Value){gx.O.ZV44bmpBuscaProcesso=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPBUSCAPROCESSO",gx.O.AV44bmpBuscaProcesso,gx.O.AV67Bmpbuscaprocesso_GXI)},c2v:function(){gx.O.AV67Bmpbuscaprocesso_GXI=this.val_GXI();gx.O.AV44bmpBuscaProcesso=this.val()},val:function(){return gx.fn.getBlobValue("vBMPBUSCAPROCESSO")},val_GXI:function(){return gx.fn.getControlValue("vBMPBUSCAPROCESSO_GXI")}, gxvar_GXI:'AV67Bmpbuscaprocesso_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPROCESSO",gxz:"ZV45bmpProcesso",gxold:"OV45bmpProcesso",gxvar:"AV45bmpProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45bmpProcesso=Value},v2z:function(Value){gx.O.ZV45bmpProcesso=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPPROCESSO",gx.O.AV45bmpProcesso,gx.O.AV66Bmpprocesso_GXI)},c2v:function(){gx.O.AV66Bmpprocesso_GXI=this.val_GXI();gx.O.AV45bmpProcesso=this.val()},val:function(){return gx.fn.getBlobValue("vBMPPROCESSO")},val_GXI:function(){return gx.fn.getControlValue("vBMPPROCESSO_GXI")}, gxvar_GXI:'AV66Bmpprocesso_GXI',nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOPROCESSO",gxz:"ZV37AnoProcesso",gxold:"OV37AnoProcesso",gxvar:"AV37AnoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37AnoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37AnoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOPROCESSO",gx.O.AV37AnoProcesso,0)},c2v:function(){gx.O.AV37AnoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[70]={fld:"TABLE8",grid:0};
   GXValidFnc[73]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV46DataIni",gxold:"OV46DataIni",gxvar:"AV46DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV46DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV46DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV46DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[75]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIM",gxz:"ZV47DataFim",gxold:"OV47DataFim",gxvar:"AV47DataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47DataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV47DataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIM",gx.O.AV47DataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV47DataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[80]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[82]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCHECK",gxz:"ZV38Check",gxold:"OV38Check",gxvar:"AV38Check",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV38Check=Value},v2z:function(Value){gx.O.ZV38Check=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("vCHECK",row || gx.fn.currentGridRowImpl(81),gx.O.AV38Check,"S")},c2v:function(){gx.O.AV38Check=this.val()},val:function(row){return gx.fn.getGridControlValue("vCHECK",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[83]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROCESSOCONVANO",gxz:"ZV57GXV12B",gxold:"OV57GXV12B",gxvar:"GXV12B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12B=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57GXV12B=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPROCESSOCONVANO",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12B,0)},c2v:function(){gx.O.GXV12B=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPROCESSOCONVANO",row || gx.fn.currentGridRowImpl(81),'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROCESSOCONVNUMERO",gxz:"ZV58GXV12C",gxold:"OV58GXV12C",gxvar:"GXV12C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12C=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58GXV12C=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12C,0)},c2v:function(){gx.O.GXV12C=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(81),'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROCESSOCONVDATAINICIO",gxz:"ZV59GXV12D",gxold:"OV59GXV12D",gxvar:"GXV12D",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12D=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV59GXV12D=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPROCESSOCONVDATAINICIO",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12D,0)},c2v:function(){gx.O.GXV12D=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLPROCESSOCONVDATAINICIO",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROCESSOCONVFINALIDADE",gxz:"ZV60GXV12E",gxold:"OV60GXV12E",gxvar:"GXV12E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12E=Value},v2z:function(Value){gx.O.ZV60GXV12E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPROCESSOCONVFINALIDADE",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12E,0)},c2v:function(){gx.O.GXV12E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPROCESSOCONVFINALIDADE",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROCESSOCONVFORNECFANTASIA",gxz:"ZV61GXV12F",gxold:"OV61GXV12F",gxvar:"GXV12F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12F=Value},v2z:function(Value){gx.O.ZV61GXV12F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPROCESSOCONVFORNECFANTASIA",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12F,0)},c2v:function(){gx.O.GXV12F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPROCESSOCONVFORNECFANTASIA",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTADOR",gxz:"ZV62GXV12G",gxold:"OV62GXV12G",gxvar:"GXV12G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12G=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62GXV12G=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTADOR",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12G,0)},c2v:function(){gx.O.GXV12G=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCONTADOR",row || gx.fn.currentGridRowImpl(81),'.')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[96]={fld:"JS", format:2,grid:0};
   GXValidFnc[99]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Processoconvempresaid,isvalid:null,rgrid:[],fld:"vPROCESSOCONVEMPRESAID",gxz:"ZV27ProcessoConvEmpresaId",gxold:"OV27ProcessoConvEmpresaId",gxvar:"AV27ProcessoConvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProcessoConvEmpresaId=Value},v2z:function(Value){gx.O.ZV27ProcessoConvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVEMPRESAID",gx.O.AV27ProcessoConvEmpresaId,0)},c2v:function(){gx.O.AV27ProcessoConvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOCONVEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[101]={fld:"BTNHELP",grid:0};
   this.AV28LinhaIni = 0 ;
   this.ZV28LinhaIni = 0 ;
   this.OV28LinhaIni = 0 ;
   this.AV29ColunaIni = 0 ;
   this.ZV29ColunaIni = 0 ;
   this.OV29ColunaIni = 0 ;
   this.AV42ProcessoConvAnoAdd = 0 ;
   this.ZV42ProcessoConvAnoAdd = 0 ;
   this.OV42ProcessoConvAnoAdd = 0 ;
   this.AV43ProcessoConvNumeroAdd = 0 ;
   this.ZV43ProcessoConvNumeroAdd = 0 ;
   this.OV43ProcessoConvNumeroAdd = 0 ;
   this.AV67Bmpbuscaprocesso_GXI = "" ;
   this.AV44bmpBuscaProcesso = "" ;
   this.ZV44bmpBuscaProcesso = "" ;
   this.OV44bmpBuscaProcesso = "" ;
   this.AV66Bmpprocesso_GXI = "" ;
   this.AV45bmpProcesso = "" ;
   this.ZV45bmpProcesso = "" ;
   this.OV45bmpProcesso = "" ;
   this.AV37AnoProcesso = 0 ;
   this.ZV37AnoProcesso = 0 ;
   this.OV37AnoProcesso = 0 ;
   this.AV46DataIni = gx.date.nullDate() ;
   this.ZV46DataIni = gx.date.nullDate() ;
   this.OV46DataIni = gx.date.nullDate() ;
   this.AV47DataFim = gx.date.nullDate() ;
   this.ZV47DataFim = gx.date.nullDate() ;
   this.OV47DataFim = gx.date.nullDate() ;
   this.ZV38Check = "" ;
   this.OV38Check = "" ;
   this.ZV57GXV12B = 0 ;
   this.OV57GXV12B = 0 ;
   this.ZV58GXV12C = 0 ;
   this.OV58GXV12C = 0 ;
   this.ZV59GXV12D = gx.date.nullDate() ;
   this.OV59GXV12D = gx.date.nullDate() ;
   this.ZV60GXV12E = "" ;
   this.OV60GXV12E = "" ;
   this.ZV61GXV12F = "" ;
   this.OV61GXV12F = "" ;
   this.ZV62GXV12G = 0 ;
   this.OV62GXV12G = 0 ;
   this.AV27ProcessoConvEmpresaId = "" ;
   this.ZV27ProcessoConvEmpresaId = "" ;
   this.OV27ProcessoConvEmpresaId = "" ;
   this.AV28LinhaIni = 0 ;
   this.AV29ColunaIni = 0 ;
   this.AV42ProcessoConvAnoAdd = 0 ;
   this.AV43ProcessoConvNumeroAdd = 0 ;
   this.AV44bmpBuscaProcesso = "" ;
   this.AV45bmpProcesso = "" ;
   this.AV37AnoProcesso = 0 ;
   this.AV46DataIni = gx.date.nullDate() ;
   this.AV47DataFim = gx.date.nullDate() ;
   this.AV27ProcessoConvEmpresaId = "" ;
   this.AV38Check = "" ;
   this.GXV12B = 0 ;
   this.GXV12C = 0 ;
   this.GXV12D = gx.date.nullDate() ;
   this.GXV12E = "" ;
   this.GXV12F = "" ;
   this.GXV12G = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A3778PedidoCompraPessoaFantasia = "" ;
   this.A3361PedidoCompraPessoaEmpId = "" ;
   this.A3362PedidoCompraPessoaId = 0 ;
   this.A3817ProcessoConvDataInicio = gx.date.nullDate() ;
   this.A3819ProcessoConvFinalidade = "" ;
   this.A4293ProcessoConvFornecId = 0 ;
   this.A4294ProcessoConvFornecFantasia = "" ;
   this.A4292ProcessoConvFornecEmpId = "" ;
   this.AV40SnMarcar = "" ;
   this.AV30SnErro = "" ;
   this.AV53TpErro = 0 ;
   this.Events = {"e11sh2_client": ["'FECHAR'", true] ,"e12sh2_client": ["ENTER", true] ,"e13sh2_client": ["'PROCURAR'", true] ,"e14sh2_client": ["'ADICIONARPROCESSO'", true] ,"e15sh2_client": ["'MARCARTODOS'", true] ,"e16sh2_client": ["'DESMARCARTODOS'", true] ,"e19sh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV24SdtGrid',fld:'vSDTGRID',grid:81},{av:'AV40SnMarcar',fld:'vSNMARCAR'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV41ExisteItem',fld:'vEXISTEITEM'},{av:'AV30SnErro',fld:'vSNERRO'},{av:'AV28LinhaIni',fld:'vLINHAINI'},{av:'AV29ColunaIni',fld:'vCOLUNAINI'},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV39SdtEtqAux',fld:'vSDTETQAUX'},{av:'AV64Pgmdesc',fld:'vPGMDESC'},{av:'AV38Check',fld:'vCHECK',grid:81},{av:'AV24SdtGrid',fld:'vSDTGRID',grid:81}],[{av:'AV28LinhaIni',fld:'vLINHAINI'},{av:'AV29ColunaIni',fld:'vCOLUNAINI'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV39SdtEtqAux',fld:'vSDTETQAUX'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30SnErro',fld:'vSNERRO'},{av:'AV41ExisteItem',fld:'vEXISTEITEM'},{av:'AV48SdtEtqAuxItem',fld:'vSDTETQAUXITEM'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV40SnMarcar',fld:'vSNMARCAR'}],[{av:'AV38Check',fld:'vCHECK'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'AV53TpErro',fld:'vTPERRO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'AV27ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'AV37AnoProcesso',fld:'vANOPROCESSO'},{av:'AV42ProcessoConvAnoAdd',fld:'vPROCESSOCONVANOADD'},{av:'AV43ProcessoConvNumeroAdd',fld:'vPROCESSOCONVNUMEROADD'},{av:'A3817ProcessoConvDataInicio',fld:'PROCESSOCONVDATAINICIO'},{av:'AV46DataIni',fld:'vDATAINI'},{av:'AV47DataFim',fld:'vDATAFIM'},{av:'AV26contador',fld:'vCONTADOR'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'A4293ProcessoConvFornecId',fld:'PROCESSOCONVFORNECID'},{av:'A4294ProcessoConvFornecFantasia',fld:'PROCESSOCONVFORNECFANTASIA'},{av:'AV52PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV49ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV50ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV51ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'AV24SdtGrid',fld:'vSDTGRID',grid:81},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV40SnMarcar',fld:'vSNMARCAR'}],[{av:'AV24SdtGrid',fld:'vSDTGRID',grid:81},{av:'AV26contador',fld:'vCONTADOR'},{av:'AV25SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV49ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV50ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV51ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'AV53TpErro',fld:'vTPERRO'},{av:'AV52PessoaFantasia',fld:'vPESSOAFANTASIA'}]];
   this.EvtParms["'MARCARTODOS'"] = [[],[{av:'AV40SnMarcar',fld:'vSNMARCAR'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[],[{av:'AV40SnMarcar',fld:'vSNMARCAR'}]];
   this.EvtParms["'ADICIONARPROCESSO'"] = [[{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'AV27ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'AV42ProcessoConvAnoAdd',fld:'vPROCESSOCONVANOADD'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'AV43ProcessoConvNumeroAdd',fld:'vPROCESSOCONVNUMEROADD'},{av:'AV26contador',fld:'vCONTADOR'},{av:'A3817ProcessoConvDataInicio',fld:'PROCESSOCONVDATAINICIO'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'AV24SdtGrid',fld:'vSDTGRID',grid:81},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV40SnMarcar',fld:'vSNMARCAR'}],[{av:'AV26contador',fld:'vCONTADOR'},{av:'AV25SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV24SdtGrid',fld:'vSDTGRID',grid:81}]];
   this.setPrompt("&BMPBUSCAPROCESSO", [45]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV40SnMarcar", "vSNMARCAR", 0, "char");
   this.setVCMap("AV40SnMarcar", "vSNMARCAR", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV40SnMarcar"});
   this.addGridBCProperty("Sdtgrid", ["ProcessoconvAno"], this.GXValidFnc[83], "AV24SdtGrid");
   this.addGridBCProperty("Sdtgrid", ["ProcessoConvNumero"], this.GXValidFnc[84], "AV24SdtGrid");
   this.addGridBCProperty("Sdtgrid", ["ProcessoConvDataInicio"], this.GXValidFnc[85], "AV24SdtGrid");
   this.addGridBCProperty("Sdtgrid", ["ProcessoConvFinalidade"], this.GXValidFnc[86], "AV24SdtGrid");
   this.addGridBCProperty("Sdtgrid", ["ProcessoConvFornecFantasia"], this.GXValidFnc[87], "AV24SdtGrid");
   this.addGridBCProperty("Sdtgrid", ["Contador"], this.GXValidFnc[88], "AV24SdtGrid");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemiteetiquetaprocessoconv());
