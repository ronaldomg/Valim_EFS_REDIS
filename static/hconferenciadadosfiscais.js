/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:37:1.36
*/
gx.evt.autoSkip = false;
gx.define('hconferenciadadosfiscais', false, function () {
   this.ServerClass =  "hconferenciadadosfiscais" ;
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
      this.AV23FILIALUNICA=gx.fn.getControlValue("vFILIALUNICA") ;
      this.AV56Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV24SdtFilialGrid=gx.fn.getControlValue("vSDTFILIALGRID") ;
      this.AV30SdtEmpresaGrid=gx.fn.getControlValue("vSDTEMPRESAGRID") ;
      this.AV12QtdPagGeradas=gx.fn.getIntegerValue("vQTDPAGGERADAS",'.') ;
      this.AV57Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialidgrid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALIDGRID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresaidgrid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAIDGRID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialidgridemp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALIDGRIDEMP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e221ds1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalconferenciadadosfiscais",[]), []);
      this.refreshOutputs([]);
   };
   this.e121ds2_client=function()
   {
      this.executeServerEvent("VTIPOCONFERENCIA.CLICK", true, null, false, true);
   };
   this.e131ds2_client=function()
   {
      this.executeServerEvent("'ADDFILIAL'", true, null, false, false);
   };
   this.e201ds2_client=function()
   {
      this.executeServerEvent("'EXCLUIRFILIAL'", true, arguments[0], false, false);
   };
   this.e141ds2_client=function()
   {
      this.executeServerEvent("'ADDEMPRESA'", true, null, false, false);
   };
   this.e161ds2_client=function()
   {
      this.executeServerEvent("'EXCLUIREMPRESA'", true, arguments[0], false, false);
   };
   this.e151ds2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e111ds2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e231ds2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,22,24,25,28,30,33,35,37,39,44,46,47,49,52,54,56,57,58,59,60,65,67,68,70,72,73,75,77,78,81,83,85,86,87,88,89,90,99,100,101,103,105,106,107,108];
   this.GXLastCtrlId =108;
   this.GridfilialContainer = new gx.grid.grid(this, 2,"WbpLvl2",55,"Gridfilial","Gridfilial","GridfilialContainer",this.CmpContext,this.IsMasterPage,"hconferenciadadosfiscais",[],false,1,false,true,0,false,false,false,"CollFilialPisCofins.FilialPisCofinsItem",0,"px","Novo registro",false,false,false,null,null,false,"AV24SdtFilialGrid",false,[1,1,1,1]);
   var GridfilialContainer = this.GridfilialContainer;
   GridfilialContainer.addSingleLineEdit("GXV11K",56,"CTLIDGFILIAL","Filial","","Id","int",0,"px",7,7,"right",null,[],"GXV11K","GXV11K",true,0,false,false,"AlinhaDireita",1,"");
   GridfilialContainer.addSingleLineEdit("GXV11L",57,"CTLDESCRICAO","Nome","","Descricao","svchar",400,"px",100,80,"left",null,[],"GXV11L","GXV11L",true,0,false,false,"SemQuebraGrid",1,"");
   GridfilialContainer.addBitmap("&Bmpexcfilial","vBMPEXCFILIAL",58,0,"px",17,"px","e201ds2_client","","Exc","Image","");
   this.setGrid(GridfilialContainer);
   this.GridempresaContainer = new gx.grid.grid(this, 8,"WbpLvl8",84,"Gridempresa","Gridempresa","GridempresaContainer",this.CmpContext,this.IsMasterPage,"hconferenciadadosfiscais",[],false,1,false,true,0,false,false,false,"CollEmpresaPisCofins.EmpresaPisCofinsItem",0,"px","Novo registro",false,false,false,null,null,false,"AV30SdtEmpresaGrid",false,[1,1,1,1]);
   var GridempresaContainer = this.GridempresaContainer;
   GridempresaContainer.addSingleLineEdit("GXV12D",85,"CTLIDGEMP","Empresa","","Id","char",0,"px",10,10,"left",null,[],"GXV12D","GXV12D",true,0,false,false,"SemQuebraGrid",1,"");
   GridempresaContainer.addSingleLineEdit("GXV12E",86,"CTLNOME","Nome","","Nome","svchar",340,"px",40,40,"left",null,[],"GXV12E","GXV12E",true,0,false,false,"SemQuebraGrid",1,"");
   GridempresaContainer.addSingleLineEdit("GXV12F",87,"CTLFILIALID","Filial","","FilialId","int",0,"px",7,7,"right",null,[],"GXV12F","GXV12F",true,0,false,false,"SemQuebraGrid",1,"");
   GridempresaContainer.addSingleLineEdit("GXV12G",88,"CTLESTABELECIMENTO","Estabelecimento","","Estabelecimento","int",0,"px",7,7,"right",null,[],"GXV12G","GXV12G",true,0,false,false,"SemQuebraGrid",1,"");
   GridempresaContainer.addBitmap("&Bmpexcemp","vBMPEXCEMP",89,0,"px",17,"px","e161ds2_client","","Exc","Image","");
   this.setGrid(GridempresaContainer);
   GXValidFnc[3]={fld:"TABPRINCIPAL",grid:0};
   GXValidFnc[6]={fld:"TABINTERNA",grid:0};
   GXValidFnc[9]={fld:"TAB1",grid:0};
   GXValidFnc[12]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONFERENCIA",gxz:"ZV15TipoConferencia",gxold:"OV15TipoConferencia",gxvar:"AV15TipoConferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15TipoConferencia=Value},v2z:function(Value){gx.O.ZV15TipoConferencia=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCONFERENCIA",gx.O.AV15TipoConferencia)},c2v:function(){gx.O.AV15TipoConferencia=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONFERENCIA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV16FilialId",gxold:"OV16FilialId",gxvar:"AV16FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV16FilialId,0)},c2v:function(){gx.O.AV16FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV17FilialNome",gxold:"OV17FilialNome",gxvar:"AV17FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17FilialNome=Value},v2z:function(Value){gx.O.ZV17FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV17FilialNome,0)},c2v:function(){gx.O.AV17FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLE2",grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREFERENCIA",gxz:"ZV20MesReferencia",gxold:"OV20MesReferencia",gxvar:"AV20MesReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20MesReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20MesReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREFERENCIA",gx.O.AV20MesReferencia,0)},c2v:function(){gx.O.AV20MesReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREFERENCIA",gxz:"ZV21AnoReferencia",gxold:"OV21AnoReferencia",gxvar:"AV21AnoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AnoReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AnoReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREFERENCIA",gx.O.AV21AnoReferencia,0)},c2v:function(){gx.O.AV21AnoReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABFILIAL1",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOMEGRID",gxz:"ZV28FilialNomeGrid",gxold:"OV28FilialNomeGrid",gxvar:"AV28FilialNomeGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FilialNomeGrid=Value},v2z:function(Value){gx.O.ZV28FilialNomeGrid=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOMEGRID",gx.O.AV28FilialNomeGrid,0)},c2v:function(){gx.O.AV28FilialNomeGrid=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOMEGRID")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialidgrid,isvalid:null,rgrid:[],fld:"vFILIALIDGRID",gxz:"ZV27FilialIdGrid",gxold:"OV27FilialIdGrid",gxvar:"AV27FilialIdGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27FilialIdGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27FilialIdGrid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDGRID",gx.O.AV27FilialIdGrid,0)},c2v:function(){gx.O.AV27FilialIdGrid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDGRID",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABFILIAL2",grid:0};
   GXValidFnc[52]={fld:"ADDFILIAL",grid:0};
   GXValidFnc[54]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[56]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:55,gxgrid:this.GridfilialContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLIDGFILIAL",gxz:"ZV49GXV11K",gxold:"OV49GXV11K",gxvar:"GXV11K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11K=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49GXV11K=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLIDGFILIAL",row || gx.fn.currentGridRowImpl(55),gx.O.GXV11K,0)},c2v:function(){gx.O.GXV11K=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLIDGFILIAL",row || gx.fn.currentGridRowImpl(55),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:55,gxgrid:this.GridfilialContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESCRICAO",gxz:"ZV50GXV11L",gxold:"OV50GXV11L",gxvar:"GXV11L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11L=Value},v2z:function(Value){gx.O.ZV50GXV11L=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDESCRICAO",row || gx.fn.currentGridRowImpl(55),gx.O.GXV11L,0)},c2v:function(){gx.O.GXV11L=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDESCRICAO",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridfilialContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCFILIAL",gxz:"ZV26BmpExcFilial",gxold:"OV26BmpExcFilial",gxvar:"AV26BmpExcFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26BmpExcFilial=Value},v2z:function(Value){gx.O.ZV26BmpExcFilial=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCFILIAL",row || gx.fn.currentGridRowImpl(55),gx.O.AV26BmpExcFilial,gx.O.AV58Bmpexcfilial_GXI)},c2v:function(){gx.O.AV58Bmpexcfilial_GXI=this.val_GXI();gx.O.AV26BmpExcFilial=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCFILIAL",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCFILIAL_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV58Bmpexcfilial_GXI',nac:gx.falseFn};
   GXValidFnc[59]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[60]={fld:"TABEMPRESA1",grid:0};
   GXValidFnc[65]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaidgrid,isvalid:null,rgrid:[],fld:"vEMPRESAIDGRID",gxz:"ZV32EmpresaIdGrid",gxold:"OV32EmpresaIdGrid",gxvar:"AV32EmpresaIdGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32EmpresaIdGrid=Value},v2z:function(Value){gx.O.ZV32EmpresaIdGrid=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAIDGRID",gx.O.AV32EmpresaIdGrid,0)},c2v:function(){gx.O.AV32EmpresaIdGrid=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAIDGRID")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESANOMEGRID",gxz:"ZV34EmpresaNomeGrid",gxold:"OV34EmpresaNomeGrid",gxvar:"AV34EmpresaNomeGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34EmpresaNomeGrid=Value},v2z:function(Value){gx.O.ZV34EmpresaNomeGrid=Value},v2c:function(){gx.fn.setControlValue("vEMPRESANOMEGRID",gx.O.AV34EmpresaNomeGrid,0)},c2v:function(){gx.O.AV34EmpresaNomeGrid=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESANOMEGRID")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialidgridemp,isvalid:null,rgrid:[],fld:"vFILIALIDGRIDEMP",gxz:"ZV33FilialIdGridEmp",gxold:"OV33FilialIdGridEmp",gxvar:"AV33FilialIdGridEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FilialIdGridEmp=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33FilialIdGridEmp=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDGRIDEMP",gx.O.AV33FilialIdGridEmp,0)},c2v:function(){gx.O.AV33FilialIdGridEmp=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDGRIDEMP",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOMEGRIDEMP",gxz:"ZV37FilialNomeGridEmp",gxold:"OV37FilialNomeGridEmp",gxvar:"AV37FilialNomeGridEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37FilialNomeGridEmp=Value},v2z:function(Value){gx.O.ZV37FilialNomeGridEmp=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOMEGRIDEMP",gx.O.AV37FilialNomeGridEmp,0)},c2v:function(){gx.O.AV37FilialNomeGridEmp=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOMEGRIDEMP")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESTABELECIMENTOGRIDEMP",gxz:"ZV35EstabelecimentoGridEmp",gxold:"OV35EstabelecimentoGridEmp",gxvar:"AV35EstabelecimentoGridEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35EstabelecimentoGridEmp=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35EstabelecimentoGridEmp=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESTABELECIMENTOGRIDEMP",gx.O.AV35EstabelecimentoGridEmp,0)},c2v:function(){gx.O.AV35EstabelecimentoGridEmp=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESTABELECIMENTOGRIDEMP",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TABEMPRESA2",grid:0};
   GXValidFnc[81]={fld:"ADDEMPRESA",grid:0};
   GXValidFnc[83]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[85]={lvl:8,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:84,gxgrid:this.GridempresaContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLIDGEMP",gxz:"ZV52GXV12D",gxold:"OV52GXV12D",gxvar:"GXV12D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12D=Value},v2z:function(Value){gx.O.ZV52GXV12D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLIDGEMP",row || gx.fn.currentGridRowImpl(84),gx.O.GXV12D,0)},c2v:function(){gx.O.GXV12D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLIDGEMP",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[86]={lvl:8,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:84,gxgrid:this.GridempresaContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOME",gxz:"ZV53GXV12E",gxold:"OV53GXV12E",gxvar:"GXV12E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12E=Value},v2z:function(Value){gx.O.ZV53GXV12E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNOME",row || gx.fn.currentGridRowImpl(84),gx.O.GXV12E,0)},c2v:function(){gx.O.GXV12E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNOME",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[87]={lvl:8,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:84,gxgrid:this.GridempresaContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFILIALID",gxz:"ZV54GXV12F",gxold:"OV54GXV12F",gxvar:"GXV12F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12F=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54GXV12F=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLFILIALID",row || gx.fn.currentGridRowImpl(84),gx.O.GXV12F,0)},c2v:function(){gx.O.GXV12F=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLFILIALID",row || gx.fn.currentGridRowImpl(84),'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:8,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:84,gxgrid:this.GridempresaContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLESTABELECIMENTO",gxz:"ZV55GXV12G",gxold:"OV55GXV12G",gxvar:"GXV12G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12G=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55GXV12G=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLESTABELECIMENTO",row || gx.fn.currentGridRowImpl(84),gx.O.GXV12G,0)},c2v:function(){gx.O.GXV12G=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLESTABELECIMENTO",row || gx.fn.currentGridRowImpl(84),'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:8,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridempresaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCEMP",gxz:"ZV29BmpExcEmp",gxold:"OV29BmpExcEmp",gxvar:"AV29BmpExcEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29BmpExcEmp=Value},v2z:function(Value){gx.O.ZV29BmpExcEmp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCEMP",row || gx.fn.currentGridRowImpl(84),gx.O.AV29BmpExcEmp,gx.O.AV59Bmpexcemp_GXI)},c2v:function(){gx.O.AV59Bmpexcemp_GXI=this.val_GXI();gx.O.AV29BmpExcEmp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCEMP",row || gx.fn.currentGridRowImpl(84))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCEMP_GXI",row || gx.fn.currentGridRowImpl(84))}, gxvar_GXI:'AV59Bmpexcemp_GXI',nac:gx.falseFn};
   GXValidFnc[90]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[99]={fld:"JS", format:2,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV36QtdeChar",gxold:"OV36QtdeChar",gxvar:"AV36QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV36QtdeChar,0)},c2v:function(){gx.O.AV36QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV14FilialEmpresaId",gxold:"OV14FilialEmpresaId",gxvar:"AV14FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV14FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV14FilialEmpresaId,0)},c2v:function(){gx.O.AV14FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"BTNHELP",grid:0};
   GXValidFnc[105]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[106]={fld:"PROMPT_FILIALIDGRID",grid:0};
   GXValidFnc[107]={fld:"PROMPT_EMPRESAIDGRID",grid:0};
   GXValidFnc[108]={fld:"PROMPT_FILIALIDGRIDEMP",grid:0};
   this.AV15TipoConferencia = "" ;
   this.ZV15TipoConferencia = "" ;
   this.OV15TipoConferencia = "" ;
   this.AV16FilialId = 0 ;
   this.ZV16FilialId = 0 ;
   this.OV16FilialId = 0 ;
   this.AV17FilialNome = "" ;
   this.ZV17FilialNome = "" ;
   this.OV17FilialNome = "" ;
   this.AV20MesReferencia = 0 ;
   this.ZV20MesReferencia = 0 ;
   this.OV20MesReferencia = 0 ;
   this.AV21AnoReferencia = 0 ;
   this.ZV21AnoReferencia = 0 ;
   this.OV21AnoReferencia = 0 ;
   this.AV28FilialNomeGrid = "" ;
   this.ZV28FilialNomeGrid = "" ;
   this.OV28FilialNomeGrid = "" ;
   this.AV27FilialIdGrid = 0 ;
   this.ZV27FilialIdGrid = 0 ;
   this.OV27FilialIdGrid = 0 ;
   this.ZV49GXV11K = 0 ;
   this.OV49GXV11K = 0 ;
   this.ZV50GXV11L = "" ;
   this.OV50GXV11L = "" ;
   this.ZV26BmpExcFilial = "" ;
   this.OV26BmpExcFilial = "" ;
   this.AV32EmpresaIdGrid = "" ;
   this.ZV32EmpresaIdGrid = "" ;
   this.OV32EmpresaIdGrid = "" ;
   this.AV34EmpresaNomeGrid = "" ;
   this.ZV34EmpresaNomeGrid = "" ;
   this.OV34EmpresaNomeGrid = "" ;
   this.AV33FilialIdGridEmp = 0 ;
   this.ZV33FilialIdGridEmp = 0 ;
   this.OV33FilialIdGridEmp = 0 ;
   this.AV37FilialNomeGridEmp = "" ;
   this.ZV37FilialNomeGridEmp = "" ;
   this.OV37FilialNomeGridEmp = "" ;
   this.AV35EstabelecimentoGridEmp = 0 ;
   this.ZV35EstabelecimentoGridEmp = 0 ;
   this.OV35EstabelecimentoGridEmp = 0 ;
   this.ZV52GXV12D = "" ;
   this.OV52GXV12D = "" ;
   this.ZV53GXV12E = "" ;
   this.OV53GXV12E = "" ;
   this.ZV54GXV12F = 0 ;
   this.OV54GXV12F = 0 ;
   this.ZV55GXV12G = 0 ;
   this.OV55GXV12G = 0 ;
   this.ZV29BmpExcEmp = "" ;
   this.OV29BmpExcEmp = "" ;
   this.AV36QtdeChar = 0 ;
   this.ZV36QtdeChar = 0 ;
   this.OV36QtdeChar = 0 ;
   this.AV14FilialEmpresaId = "" ;
   this.ZV14FilialEmpresaId = "" ;
   this.OV14FilialEmpresaId = "" ;
   this.AV15TipoConferencia = "" ;
   this.AV16FilialId = 0 ;
   this.AV17FilialNome = "" ;
   this.AV20MesReferencia = 0 ;
   this.AV21AnoReferencia = 0 ;
   this.AV28FilialNomeGrid = "" ;
   this.AV27FilialIdGrid = 0 ;
   this.AV32EmpresaIdGrid = "" ;
   this.AV34EmpresaNomeGrid = "" ;
   this.AV33FilialIdGridEmp = 0 ;
   this.AV37FilialNomeGridEmp = "" ;
   this.AV35EstabelecimentoGridEmp = 0 ;
   this.AV36QtdeChar = 0 ;
   this.AV14FilialEmpresaId = "" ;
   this.GXV12D = "" ;
   this.GXV12E = "" ;
   this.GXV12F = 0 ;
   this.GXV12G = 0 ;
   this.AV29BmpExcEmp = "" ;
   this.GXV11K = 0 ;
   this.GXV11L = "" ;
   this.AV26BmpExcFilial = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A138EmpresaId = "" ;
   this.A186EmpresaNome = "" ;
   this.A1136FilialNome = "" ;
   this.AV23FILIALUNICA = "" ;
   this.AV56Pgmname = "" ;
   this.AV24SdtFilialGrid = [ ] ;
   this.AV30SdtEmpresaGrid = [ ] ;
   this.AV12QtdPagGeradas = 0 ;
   this.AV57Pgmdesc = "" ;
   this.Events = {"e121ds2_client": ["VTIPOCONFERENCIA.CLICK", true] ,"e131ds2_client": ["'ADDFILIAL'", true] ,"e201ds2_client": ["'EXCLUIRFILIAL'", true] ,"e141ds2_client": ["'ADDEMPRESA'", true] ,"e161ds2_client": ["'EXCLUIREMPRESA'", true] ,"e151ds2_client": ["ENTER", true] ,"e111ds2_client": ["'FECHAR'", true] ,"e231ds2_client": ["CANCEL", true] ,"e221ds1_client": ["'TIPOCFO'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDFILIAL_nFirstRecordOnPage'},{av:'GRIDFILIAL_nEOF'},{av:'AV26BmpExcFilial',fld:'vBMPEXCFILIAL'},{av:'gx.fn.getCtrlProperty("vBMPEXCFILIAL","Tooltiptext")',ctrl:'vBMPEXCFILIAL',prop:'Tooltiptext'},{av:'GRIDEMPRESA_nFirstRecordOnPage'},{av:'GRIDEMPRESA_nEOF'},{av:'AV29BmpExcEmp',fld:'vBMPEXCEMP'},{av:'gx.fn.getCtrlProperty("vBMPEXCEMP","Tooltiptext")',ctrl:'vBMPEXCEMP',prop:'Tooltiptext'},{av:'AV15TipoConferencia',fld:'vTIPOCONFERENCIA'},{av:'AV23FILIALUNICA',fld:'vFILIALUNICA'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV20MesReferencia',fld:'vMESREFERENCIA'},{av:'AV21AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV24SdtFilialGrid',fld:'vSDTFILIALGRID',grid:55},{av:'AV30SdtEmpresaGrid',fld:'vSDTEMPRESAGRID',grid:84},{av:'AV12QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV57Pgmdesc',fld:'vPGMDESC'}],[{av:'gx.fn.getCtrlProperty("TABFILIAL1","Visible")',ctrl:'TABFILIAL1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFILIAL2","Visible")',ctrl:'TABFILIAL2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABEMPRESA1","Visible")',ctrl:'TABEMPRESA1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABEMPRESA2","Visible")',ctrl:'TABEMPRESA2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DIV1","Caption")',ctrl:'DIV1',prop:'Caption'},{av:'gx.fn.getCtrlProperty("DIV2","Caption")',ctrl:'DIV2',prop:'Caption'},{av:'gx.fn.getCtrlProperty("DIV3","Caption")',ctrl:'DIV3',prop:'Caption'},{av:'gx.fn.getCtrlProperty("DIV4","Caption")',ctrl:'DIV4',prop:'Caption'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV12QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30SdtEmpresaGrid',fld:'vSDTEMPRESAGRID',grid:84},{av:'AV24SdtFilialGrid',fld:'vSDTFILIALGRID',grid:55},{av:'AV21AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV20MesReferencia',fld:'vMESREFERENCIA'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV15TipoConferencia',fld:'vTIPOCONFERENCIA'},{av:'AV39SdtConfDadosFiscais',fld:'vSDTCONFDADOSFISCAIS'}]];
   this.EvtParms["VTIPOCONFERENCIA.CLICK"] = [[{av:'AV15TipoConferencia',fld:'vTIPOCONFERENCIA'},{av:'AV30SdtEmpresaGrid',fld:'vSDTEMPRESAGRID',grid:84},{av:'GRIDEMPRESA_nFirstRecordOnPage'},{av:'GRIDEMPRESA_nEOF'},{av:'AV29BmpExcEmp',fld:'vBMPEXCEMP'},{av:'gx.fn.getCtrlProperty("vBMPEXCEMP","Tooltiptext")',ctrl:'vBMPEXCEMP',prop:'Tooltiptext'},{av:'AV23FILIALUNICA',fld:'vFILIALUNICA'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV20MesReferencia',fld:'vMESREFERENCIA'},{av:'AV21AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV24SdtFilialGrid',fld:'vSDTFILIALGRID',grid:55},{av:'AV12QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV57Pgmdesc',fld:'vPGMDESC'}],[{av:'AV32EmpresaIdGrid',fld:'vEMPRESAIDGRID'},{av:'AV34EmpresaNomeGrid',fld:'vEMPRESANOMEGRID'},{av:'AV33FilialIdGridEmp',fld:'vFILIALIDGRIDEMP'},{av:'AV37FilialNomeGridEmp',fld:'vFILIALNOMEGRIDEMP'},{av:'AV35EstabelecimentoGridEmp',fld:'vESTABELECIMENTOGRIDEMP'},{av:'AV30SdtEmpresaGrid',fld:'vSDTEMPRESAGRID',grid:84}]];
   this.EvtParms["'TIPOCFO'"] = [[],[]];
   this.EvtParms["'ADDFILIAL'"] = [[{av:'AV22SNErro',fld:'vSNERRO'},{av:'AV27FilialIdGrid',fld:'vFILIALIDGRID'},{av:'AV28FilialNomeGrid',fld:'vFILIALNOMEGRID'},{av:'AV24SdtFilialGrid',fld:'vSDTFILIALGRID',grid:55},{av:'AV30SdtEmpresaGrid',fld:'vSDTEMPRESAGRID',grid:84},{av:'AV16FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV14FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'GRIDFILIAL_nFirstRecordOnPage'},{av:'GRIDFILIAL_nEOF'},{av:'AV26BmpExcFilial',fld:'vBMPEXCFILIAL'},{av:'gx.fn.getCtrlProperty("vBMPEXCFILIAL","Tooltiptext")',ctrl:'vBMPEXCFILIAL',prop:'Tooltiptext'},{av:'AV15TipoConferencia',fld:'vTIPOCONFERENCIA'},{av:'AV23FILIALUNICA',fld:'vFILIALUNICA'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV20MesReferencia',fld:'vMESREFERENCIA'},{av:'AV21AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV12QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV57Pgmdesc',fld:'vPGMDESC'}],[{av:'AV25SdtFilialGridItem',fld:'vSDTFILIALGRIDITEM'},{av:'AV24SdtFilialGrid',fld:'vSDTFILIALGRID',grid:55},{av:'AV27FilialIdGrid',fld:'vFILIALIDGRID'},{av:'AV28FilialNomeGrid',fld:'vFILIALNOMEGRID'},{av:'AV22SNErro',fld:'vSNERRO'},{av:'AV62GXLvl331',fld:'vGXLVL331'},{av:'AV63GXV3',fld:'vGXV3'}]];
   this.EvtParms["'EXCLUIRFILIAL'"] = [[{av:'AV24SdtFilialGrid',fld:'vSDTFILIALGRID',grid:55},{av:'GRIDFILIAL_nFirstRecordOnPage'},{av:'GRIDFILIAL_nEOF'},{av:'AV26BmpExcFilial',fld:'vBMPEXCFILIAL'},{av:'gx.fn.getCtrlProperty("vBMPEXCFILIAL","Tooltiptext")',ctrl:'vBMPEXCFILIAL',prop:'Tooltiptext'},{av:'AV15TipoConferencia',fld:'vTIPOCONFERENCIA'},{av:'AV23FILIALUNICA',fld:'vFILIALUNICA'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV20MesReferencia',fld:'vMESREFERENCIA'},{av:'AV21AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV30SdtEmpresaGrid',fld:'vSDTEMPRESAGRID',grid:84},{av:'AV12QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV57Pgmdesc',fld:'vPGMDESC'}],[{av:'AV24SdtFilialGrid',fld:'vSDTFILIALGRID',grid:55}]];
   this.EvtParms["'ADDEMPRESA'"] = [[{av:'AV22SNErro',fld:'vSNERRO'},{av:'AV32EmpresaIdGrid',fld:'vEMPRESAIDGRID'},{av:'AV40EmpresaNome',fld:'vEMPRESANOME'},{av:'AV33FilialIdGridEmp',fld:'vFILIALIDGRIDEMP'},{av:'AV35EstabelecimentoGridEmp',fld:'vESTABELECIMENTOGRIDEMP'},{av:'AV30SdtEmpresaGrid',fld:'vSDTEMPRESAGRID',grid:84},{av:'AV24SdtFilialGrid',fld:'vSDTFILIALGRID',grid:55},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A186EmpresaNome',fld:'EMPRESANOME'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV14FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'GRIDEMPRESA_nFirstRecordOnPage'},{av:'GRIDEMPRESA_nEOF'},{av:'AV29BmpExcEmp',fld:'vBMPEXCEMP'},{av:'gx.fn.getCtrlProperty("vBMPEXCEMP","Tooltiptext")',ctrl:'vBMPEXCEMP',prop:'Tooltiptext'},{av:'AV15TipoConferencia',fld:'vTIPOCONFERENCIA'},{av:'AV23FILIALUNICA',fld:'vFILIALUNICA'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV20MesReferencia',fld:'vMESREFERENCIA'},{av:'AV21AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV12QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV57Pgmdesc',fld:'vPGMDESC'}],[{av:'AV31SdtEmpresaGridItem',fld:'vSDTEMPRESAGRIDITEM'},{av:'AV30SdtEmpresaGrid',fld:'vSDTEMPRESAGRID',grid:84},{av:'AV32EmpresaIdGrid',fld:'vEMPRESAIDGRID'},{av:'AV34EmpresaNomeGrid',fld:'vEMPRESANOMEGRID'},{av:'AV33FilialIdGridEmp',fld:'vFILIALIDGRIDEMP'},{av:'AV37FilialNomeGridEmp',fld:'vFILIALNOMEGRIDEMP'},{av:'AV35EstabelecimentoGridEmp',fld:'vESTABELECIMENTOGRIDEMP'},{av:'AV22SNErro',fld:'vSNERRO'},{av:'AV64GXLvl371',fld:'vGXLVL371'},{av:'AV40EmpresaNome',fld:'vEMPRESANOME'},{av:'AV65GXLvl391',fld:'vGXLVL391'},{av:'AV66GXV4',fld:'vGXV4'}]];
   this.EvtParms["'EXCLUIREMPRESA'"] = [[{av:'AV30SdtEmpresaGrid',fld:'vSDTEMPRESAGRID',grid:84},{av:'GRIDEMPRESA_nFirstRecordOnPage'},{av:'GRIDEMPRESA_nEOF'},{av:'AV29BmpExcEmp',fld:'vBMPEXCEMP'},{av:'gx.fn.getCtrlProperty("vBMPEXCEMP","Tooltiptext")',ctrl:'vBMPEXCEMP',prop:'Tooltiptext'},{av:'AV15TipoConferencia',fld:'vTIPOCONFERENCIA'},{av:'AV23FILIALUNICA',fld:'vFILIALUNICA'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV20MesReferencia',fld:'vMESREFERENCIA'},{av:'AV21AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV24SdtFilialGrid',fld:'vSDTFILIALGRID',grid:55},{av:'AV12QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV57Pgmdesc',fld:'vPGMDESC'}],[{av:'AV30SdtEmpresaGrid',fld:'vSDTEMPRESAGRID',grid:84}]];
   this.EvtParms["ENTER"] = [[{av:'AV22SNErro',fld:'vSNERRO'},{av:'AV15TipoConferencia',fld:'vTIPOCONFERENCIA'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV14FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV20MesReferencia',fld:'vMESREFERENCIA'},{av:'AV21AnoReferencia',fld:'vANOREFERENCIA'}],[{av:'AV22SNErro',fld:'vSNERRO'},{av:'AV61GXLvl273',fld:'vGXLVL273'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_FILIALID", [24]);
   this.setPrompt("PROMPT_FILIALIDGRID", [47]);
   this.setPrompt("PROMPT_EMPRESAIDGRID", [67]);
   this.setPrompt("PROMPT_FILIALIDGRIDEMP", [72]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV23FILIALUNICA", "vFILIALUNICA", 0, "char");
   this.setVCMap("AV56Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV24SdtFilialGrid", "vSDTFILIALGRID", 0, "CollFilialPisCofins.FilialPisCofinsItem");
   this.setVCMap("AV30SdtEmpresaGrid", "vSDTEMPRESAGRID", 0, "CollEmpresaPisCofins.EmpresaPisCofinsItem");
   this.setVCMap("AV12QtdPagGeradas", "vQTDPAGGERADAS", 0, "int");
   this.setVCMap("AV57Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23FILIALUNICA", "vFILIALUNICA", 0, "char");
   this.setVCMap("AV56Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV24SdtFilialGrid", "vSDTFILIALGRID", 0, "CollFilialPisCofins.FilialPisCofinsItem");
   this.setVCMap("AV30SdtEmpresaGrid", "vSDTEMPRESAGRID", 0, "CollEmpresaPisCofins.EmpresaPisCofinsItem");
   this.setVCMap("AV12QtdPagGeradas", "vQTDPAGGERADAS", 0, "int");
   this.setVCMap("AV57Pgmdesc", "vPGMDESC", 0, "char");
   GridfilialContainer.addRefreshingVar({rfrVar:"AV26BmpExcFilial", rfrProp:"Value", gxAttId:"Bmpexcfilial"});
   GridfilialContainer.addRefreshingVar({rfrVar:"AV26BmpExcFilial", rfrProp:"Tooltiptext", gxAttId:"Bmpexcfilial"});
   GridfilialContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridfilialContainer.addRefreshingVar({rfrVar:"AV23FILIALUNICA"});
   GridfilialContainer.addRefreshingVar({rfrVar:"AV56Pgmname"});
   GridfilialContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridfilialContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridfilialContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridfilialContainer.addRefreshingVar({rfrVar:"AV24SdtFilialGrid"});
   GridfilialContainer.addRefreshingVar({rfrVar:"AV30SdtEmpresaGrid"});
   GridfilialContainer.addRefreshingVar({rfrVar:"AV12QtdPagGeradas"});
   GridfilialContainer.addRefreshingVar({rfrVar:"AV57Pgmdesc"});
   GridempresaContainer.addRefreshingVar({rfrVar:"AV29BmpExcEmp", rfrProp:"Value", gxAttId:"Bmpexcemp"});
   GridempresaContainer.addRefreshingVar({rfrVar:"AV29BmpExcEmp", rfrProp:"Tooltiptext", gxAttId:"Bmpexcemp"});
   GridempresaContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridempresaContainer.addRefreshingVar({rfrVar:"AV23FILIALUNICA"});
   GridempresaContainer.addRefreshingVar({rfrVar:"AV56Pgmname"});
   GridempresaContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridempresaContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridempresaContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridempresaContainer.addRefreshingVar({rfrVar:"AV24SdtFilialGrid"});
   GridempresaContainer.addRefreshingVar({rfrVar:"AV30SdtEmpresaGrid"});
   GridempresaContainer.addRefreshingVar({rfrVar:"AV12QtdPagGeradas"});
   GridempresaContainer.addRefreshingVar({rfrVar:"AV57Pgmdesc"});
   this.addGridBCProperty("Sdtfilialgrid", ["Id"], this.GXValidFnc[56], "AV24SdtFilialGrid");
   this.addGridBCProperty("Sdtfilialgrid", ["Descricao"], this.GXValidFnc[57], "AV24SdtFilialGrid");
   this.addGridBCProperty("Sdtempresagrid", ["Id"], this.GXValidFnc[85], "AV30SdtEmpresaGrid");
   this.addGridBCProperty("Sdtempresagrid", ["Nome"], this.GXValidFnc[86], "AV30SdtEmpresaGrid");
   this.addGridBCProperty("Sdtempresagrid", ["FilialId"], this.GXValidFnc[87], "AV30SdtEmpresaGrid");
   this.addGridBCProperty("Sdtempresagrid", ["Estabelecimento"], this.GXValidFnc[88], "AV30SdtEmpresaGrid");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconferenciadadosfiscais());
