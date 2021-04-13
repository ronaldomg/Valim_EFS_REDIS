/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:16:20.17
*/
gx.evt.autoSkip = false;
gx.define('hconsultalancamentocxabco', false, function () {
   this.ServerClass =  "hconsultalancamentocxabco" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A1933LancamentoCxaBcoValor=gx.fn.getDecimalValue("LANCAMENTOCXABCOVALOR",'.',',') ;
      this.AV19PLancamentoCxaBcoNumero=gx.fn.getIntegerValue("vPLANCAMENTOCXABCONUMERO",'.') ;
   };
   this.Valid_Lancamentocxabcocaibanempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOCAIBANEMPID", gx.fn.currentGridRowImpl(42));
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
   this.Valid_Lancamentocxabcocaibanid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOCAIBANID", gx.fn.currentGridRowImpl(42));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcohisempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOHISEMPID", gx.fn.currentGridRowImpl(42));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcohisid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOHISID", gx.fn.currentGridRowImpl(42));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcocaibanid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOCAIBANID", gx.fn.currentGridRowImpl(42));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcohisid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOHISID", gx.fn.currentGridRowImpl(42));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e19bu2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11bu2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12bu2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13bu2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14bu2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15bu2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16bu2_client=function()
   {
      this.executeServerEvent("VLANCAMENTOCXABCOHISID.ISVALID", true, null, false, true);
   };
   this.e17bu2_client=function()
   {
      this.executeServerEvent("VLANCAMENTOCXABCOCAIBANID.ISVALID", true, null, false, true);
   };
   this.e22bu2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23bu1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,31,34,36,37,43,44,45,46,47,48,49,50,51,52,53,59,62,64,66,68,70,71,72,73,74,75,76,77,78,79,80,81];
   this.GXLastCtrlId =81;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",42,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultalancamentocxabco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1929,43,"LANCAMENTOCXABCONUMERO","","","LancamentoCxaBcoNumero","int",0,"px",8,8,"right",null,[],1929,"LancamentoCxaBcoNumero",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1930,44,"LANCAMENTOCXABCODATA","","","LancamentoCxaBcoData","date",0,"px",10,10,"right",null,[],1930,"LancamentoCxaBcoData",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1932,45,"LANCAMENTOCXABCODOCUMENTO","","","LancamentoCxaBcoDocumento","svchar",0,"px",20,20,"left",null,[],1932,"LancamentoCxaBcoDocumento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1869,46,"LANCAMENTOCXABCOCAIBANDESCRICA","Caixa/Banco","","LancamentoCxaBcoCaiBanDescrica","svchar",0,"px",25,25,"left",null,[],1869,"LancamentoCxaBcoCaiBanDescrica",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1867,47,"LANCAMENTOCXABCOCAIBANEMPID","Empresa","","LancamentoCxaBcoCaiBanEmpId","char",0,"px",10,10,"left",null,[],1867,"LancamentoCxaBcoCaiBanEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1868,48,"LANCAMENTOCXABCOCAIBANID","","","LancamentoCxaBcoCaiBanId","int",0,"px",5,5,"right",null,[],1868,"LancamentoCxaBcoCaiBanId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1872,49,"LANCAMENTOCXABCOHISDESCRICAO","Histórico","","LancamentoCxaBcoHisDescricao","svchar",0,"px",25,25,"left",null,[],1872,"LancamentoCxaBcoHisDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1870,50,"LANCAMENTOCXABCOHISEMPID","Empresa","","LancamentoCxaBcoHisEmpId","char",0,"px",10,10,"left",null,[],1870,"LancamentoCxaBcoHisEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1871,51,"LANCAMENTOCXABCOHISID","","","LancamentoCxaBcoHisId","int",0,"px",4,4,"right",null,[],1871,"LancamentoCxaBcoHisId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Lancamentocxabcovalor",52,"vLANCAMENTOCXABCOVALOR","Valor","","LancamentoCxaBcoValor","svchar",0,"px",22,22,"left",null,[],"Lancamentocxabcovalor","LancamentoCxaBcoValor",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Debitocredito",53,"vDEBITOCREDITO","D/C","","DebitoCredito","char",0,"px",1,1,"left",null,[],"Debitocredito","DebitoCredito",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLERANGEDATA",grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCXABCODATAINI",gxz:"ZV17LancamentoCxaBcoDataIni",gxold:"OV17LancamentoCxaBcoDataIni",gxvar:"AV17LancamentoCxaBcoDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17LancamentoCxaBcoDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV17LancamentoCxaBcoDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCODATAINI",gx.O.AV17LancamentoCxaBcoDataIni,0)},c2v:function(){gx.O.AV17LancamentoCxaBcoDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCXABCODATAINI")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCXABCODATAFIM",gxz:"ZV30LancamentoCxaBcoDataFim",gxold:"OV30LancamentoCxaBcoDataFim",gxvar:"AV30LancamentoCxaBcoDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30LancamentoCxaBcoDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30LancamentoCxaBcoDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCODATAFIM",gx.O.AV30LancamentoCxaBcoDataFim,0)},c2v:function(){gx.O.AV30LancamentoCxaBcoDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCXABCODATAFIM")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCXABCODOCUMENTO",gxz:"ZV18LancamentoCxaBcoDocumento",gxold:"OV18LancamentoCxaBcoDocumento",gxvar:"AV18LancamentoCxaBcoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18LancamentoCxaBcoDocumento=Value},v2z:function(Value){gx.O.ZV18LancamentoCxaBcoDocumento=Value},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCODOCUMENTO",gx.O.AV18LancamentoCxaBcoDocumento,0)},c2v:function(){gx.O.AV18LancamentoCxaBcoDocumento=this.val()},val:function(){return gx.fn.getControlValue("vLANCAMENTOCXABCODOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e16bu2_client',rgrid:[this.GridContainer],fld:"vLANCAMENTOCXABCOHISID",gxz:"ZV16LancamentoCxaBcoHisId",gxold:"OV16LancamentoCxaBcoHisId",gxvar:"AV16LancamentoCxaBcoHisId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16LancamentoCxaBcoHisId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16LancamentoCxaBcoHisId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCOHISID",gx.O.AV16LancamentoCxaBcoHisId,0)},c2v:function(){gx.O.AV16LancamentoCxaBcoHisId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCOHISID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOHISDESCRICAO",gxz:"ZV28LancamentoCxaBcoHisDescricao",gxold:"OV28LancamentoCxaBcoHisDescricao",gxvar:"AV28LancamentoCxaBcoHisDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28LancamentoCxaBcoHisDescricao=Value},v2z:function(Value){gx.O.ZV28LancamentoCxaBcoHisDescricao=Value},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCOHISDESCRICAO",gx.O.AV28LancamentoCxaBcoHisDescricao,0)},c2v:function(){gx.O.AV28LancamentoCxaBcoHisDescricao=this.val()},val:function(){return gx.fn.getControlValue("vLANCAMENTOCXABCOHISDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e17bu2_client',rgrid:[this.GridContainer],fld:"vLANCAMENTOCXABCOCAIBANID",gxz:"ZV15LancamentoCxaBcoCaiBanId",gxold:"OV15LancamentoCxaBcoCaiBanId",gxvar:"AV15LancamentoCxaBcoCaiBanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCOCAIBANID",gx.O.AV15LancamentoCxaBcoCaiBanId,0)},c2v:function(){gx.O.AV15LancamentoCxaBcoCaiBanId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCOCAIBANID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOCAIBANDESCRICAO",gxz:"ZV29LancamentoCxaBcoCaiBanDescricao",gxold:"OV29LancamentoCxaBcoCaiBanDescricao",gxvar:"AV29LancamentoCxaBcoCaiBanDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29LancamentoCxaBcoCaiBanDescricao=Value},v2z:function(Value){gx.O.ZV29LancamentoCxaBcoCaiBanDescricao=Value},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCOCAIBANDESCRICAO",gx.O.AV29LancamentoCxaBcoCaiBanDescricao,0)},c2v:function(){gx.O.AV29LancamentoCxaBcoCaiBanDescricao=this.val()},val:function(){return gx.fn.getControlValue("vLANCAMENTOCXABCOCAIBANDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCONUMERO",gxz:"Z1929LancamentoCxaBcoNumero",gxold:"O1929LancamentoCxaBcoNumero",gxvar:"A1929LancamentoCxaBcoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCONUMERO",row || gx.fn.currentGridRowImpl(42),gx.O.A1929LancamentoCxaBcoNumero,0)},c2v:function(){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCXABCONUMERO",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCODATA",gxz:"Z1930LancamentoCxaBcoData",gxold:"O1930LancamentoCxaBcoData",gxvar:"A1930LancamentoCxaBcoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCODATA",row || gx.fn.currentGridRowImpl(42),gx.O.A1930LancamentoCxaBcoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOCXABCODATA",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCODOCUMENTO",gxz:"Z1932LancamentoCxaBcoDocumento",gxold:"O1932LancamentoCxaBcoDocumento",gxvar:"A1932LancamentoCxaBcoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1932LancamentoCxaBcoDocumento=Value},v2z:function(Value){gx.O.Z1932LancamentoCxaBcoDocumento=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCODOCUMENTO",row || gx.fn.currentGridRowImpl(42),gx.O.A1932LancamentoCxaBcoDocumento,0)},c2v:function(){gx.O.A1932LancamentoCxaBcoDocumento=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCODOCUMENTO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOCAIBANDESCRICA",gxz:"Z1869LancamentoCxaBcoCaiBanDescrica",gxold:"O1869LancamentoCxaBcoCaiBanDescrica",gxvar:"A1869LancamentoCxaBcoCaiBanDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1869LancamentoCxaBcoCaiBanDescrica=Value},v2z:function(Value){gx.O.Z1869LancamentoCxaBcoCaiBanDescrica=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOCAIBANDESCRICA",row || gx.fn.currentGridRowImpl(42),gx.O.A1869LancamentoCxaBcoCaiBanDescrica,0)},c2v:function(){gx.O.A1869LancamentoCxaBcoCaiBanDescrica=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCOCAIBANDESCRICA",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:this.Valid_Lancamentocxabcocaibanempid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOCAIBANEMPID",gxz:"Z1867LancamentoCxaBcoCaiBanEmpId",gxold:"O1867LancamentoCxaBcoCaiBanEmpId",gxvar:"A1867LancamentoCxaBcoCaiBanEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1867LancamentoCxaBcoCaiBanEmpId=Value},v2z:function(Value){gx.O.Z1867LancamentoCxaBcoCaiBanEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOCAIBANEMPID",row || gx.fn.currentGridRowImpl(42),gx.O.A1867LancamentoCxaBcoCaiBanEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1867LancamentoCxaBcoCaiBanEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCOCAIBANEMPID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:this.Valid_Lancamentocxabcocaibanid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOCAIBANID",gxz:"Z1868LancamentoCxaBcoCaiBanId",gxold:"O1868LancamentoCxaBcoCaiBanId",gxvar:"A1868LancamentoCxaBcoCaiBanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1868LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1868LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOCAIBANID",row || gx.fn.currentGridRowImpl(42),gx.O.A1868LancamentoCxaBcoCaiBanId,0)},c2v:function(){gx.O.A1868LancamentoCxaBcoCaiBanId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCXABCOCAIBANID",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOHISDESCRICAO",gxz:"Z1872LancamentoCxaBcoHisDescricao",gxold:"O1872LancamentoCxaBcoHisDescricao",gxvar:"A1872LancamentoCxaBcoHisDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1872LancamentoCxaBcoHisDescricao=Value},v2z:function(Value){gx.O.Z1872LancamentoCxaBcoHisDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOHISDESCRICAO",row || gx.fn.currentGridRowImpl(42),gx.O.A1872LancamentoCxaBcoHisDescricao,0)},c2v:function(){gx.O.A1872LancamentoCxaBcoHisDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCOHISDESCRICAO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:this.Valid_Lancamentocxabcohisempid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOHISEMPID",gxz:"Z1870LancamentoCxaBcoHisEmpId",gxold:"O1870LancamentoCxaBcoHisEmpId",gxvar:"A1870LancamentoCxaBcoHisEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1870LancamentoCxaBcoHisEmpId=Value},v2z:function(Value){gx.O.Z1870LancamentoCxaBcoHisEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOHISEMPID",row || gx.fn.currentGridRowImpl(42),gx.O.A1870LancamentoCxaBcoHisEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1870LancamentoCxaBcoHisEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCOHISEMPID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:this.Valid_Lancamentocxabcohisid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOHISID",gxz:"Z1871LancamentoCxaBcoHisId",gxold:"O1871LancamentoCxaBcoHisId",gxvar:"A1871LancamentoCxaBcoHisId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1871LancamentoCxaBcoHisId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1871LancamentoCxaBcoHisId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOHISID",row || gx.fn.currentGridRowImpl(42),gx.O.A1871LancamentoCxaBcoHisId,0)},c2v:function(){gx.O.A1871LancamentoCxaBcoHisId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCXABCOHISID",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:22,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOVALOR",gxz:"ZV20LancamentoCxaBcoValor",gxold:"OV20LancamentoCxaBcoValor",gxvar:"AV20LancamentoCxaBcoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20LancamentoCxaBcoValor=Value},v2z:function(Value){gx.O.ZV20LancamentoCxaBcoValor=Value},v2c:function(row){gx.fn.setGridControlValue("vLANCAMENTOCXABCOVALOR",row || gx.fn.currentGridRowImpl(42),gx.O.AV20LancamentoCxaBcoValor,0)},c2v:function(){gx.O.AV20LancamentoCxaBcoValor=this.val()},val:function(row){return gx.fn.getGridControlValue("vLANCAMENTOCXABCOVALOR",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITOCREDITO",gxz:"ZV21DebitoCredito",gxold:"OV21DebitoCredito",gxvar:"AV21DebitoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV21DebitoCredito=Value},v2z:function(Value){gx.O.ZV21DebitoCredito=Value},v2c:function(row){gx.fn.setGridControlValue("vDEBITOCREDITO",row || gx.fn.currentGridRowImpl(42),gx.O.AV21DebitoCredito,0)},c2v:function(){gx.O.AV21DebitoCredito=this.val()},val:function(row){return gx.fn.getGridControlValue("vDEBITOCREDITO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLENAV",grid:0};
   GXValidFnc[62]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[64]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[66]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[68]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[70]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[71]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCXABCO",gxz:"ZV22EmpresaPadraoCxaBco",gxold:"OV22EmpresaPadraoCxaBco",gxvar:"AV22EmpresaPadraoCxaBco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22EmpresaPadraoCxaBco=Value},v2z:function(Value){gx.O.ZV22EmpresaPadraoCxaBco=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCXABCO",gx.O.AV22EmpresaPadraoCxaBco,0)},c2v:function(){gx.O.AV22EmpresaPadraoCxaBco=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCXABCO")},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOHIST",gxz:"ZV23EmpresaPadraoHist",gxold:"OV23EmpresaPadraoHist",gxvar:"AV23EmpresaPadraoHist",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23EmpresaPadraoHist=Value},v2z:function(Value){gx.O.ZV23EmpresaPadraoHist=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOHIST",gx.O.AV23EmpresaPadraoHist,0)},c2v:function(){gx.O.AV23EmpresaPadraoHist=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOHIST")},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV32Pagina",gxold:"OV32Pagina",gxvar:"AV32Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV32Pagina,0)},c2v:function(){gx.O.AV32Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV33PaginaAux",gxold:"OV33PaginaAux",gxvar:"AV33PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV33PaginaAux,0)},c2v:function(){gx.O.AV33PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALREGISTROS",gxz:"ZV35TotalRegistros",gxold:"OV35TotalRegistros",gxvar:"AV35TotalRegistros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35TotalRegistros=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35TotalRegistros=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTOTALREGISTROS",gx.O.AV35TotalRegistros,0)},c2v:function(){gx.O.AV35TotalRegistros=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTOTALREGISTROS",'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNMONTA",gxz:"ZV40SnMonta",gxold:"OV40SnMonta",gxvar:"AV40SnMonta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40SnMonta=Value},v2z:function(Value){gx.O.ZV40SnMonta=Value},v2c:function(){gx.fn.setControlValue("vSNMONTA",gx.O.AV40SnMonta,0)},c2v:function(){gx.O.AV40SnMonta=this.val()},val:function(){return gx.fn.getControlValue("vSNMONTA")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"PROMPT_LANCAMENTOCXABCOHISID",grid:0};
   GXValidFnc[81]={fld:"PROMPT_LANCAMENTOCXABCOCAIBANID",grid:0};
   this.AV17LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.ZV17LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.OV17LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.AV30LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.ZV30LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.OV30LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.AV18LancamentoCxaBcoDocumento = "" ;
   this.ZV18LancamentoCxaBcoDocumento = "" ;
   this.OV18LancamentoCxaBcoDocumento = "" ;
   this.AV16LancamentoCxaBcoHisId = 0 ;
   this.ZV16LancamentoCxaBcoHisId = 0 ;
   this.OV16LancamentoCxaBcoHisId = 0 ;
   this.AV28LancamentoCxaBcoHisDescricao = "" ;
   this.ZV28LancamentoCxaBcoHisDescricao = "" ;
   this.OV28LancamentoCxaBcoHisDescricao = "" ;
   this.AV15LancamentoCxaBcoCaiBanId = 0 ;
   this.ZV15LancamentoCxaBcoCaiBanId = 0 ;
   this.OV15LancamentoCxaBcoCaiBanId = 0 ;
   this.AV29LancamentoCxaBcoCaiBanDescricao = "" ;
   this.ZV29LancamentoCxaBcoCaiBanDescricao = "" ;
   this.OV29LancamentoCxaBcoCaiBanDescricao = "" ;
   this.Z1929LancamentoCxaBcoNumero = 0 ;
   this.O1929LancamentoCxaBcoNumero = 0 ;
   this.Z1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.O1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.Z1932LancamentoCxaBcoDocumento = "" ;
   this.O1932LancamentoCxaBcoDocumento = "" ;
   this.Z1869LancamentoCxaBcoCaiBanDescrica = "" ;
   this.O1869LancamentoCxaBcoCaiBanDescrica = "" ;
   this.Z1867LancamentoCxaBcoCaiBanEmpId = "" ;
   this.O1867LancamentoCxaBcoCaiBanEmpId = "" ;
   this.Z1868LancamentoCxaBcoCaiBanId = 0 ;
   this.O1868LancamentoCxaBcoCaiBanId = 0 ;
   this.Z1872LancamentoCxaBcoHisDescricao = "" ;
   this.O1872LancamentoCxaBcoHisDescricao = "" ;
   this.Z1870LancamentoCxaBcoHisEmpId = "" ;
   this.O1870LancamentoCxaBcoHisEmpId = "" ;
   this.Z1871LancamentoCxaBcoHisId = 0 ;
   this.O1871LancamentoCxaBcoHisId = 0 ;
   this.ZV20LancamentoCxaBcoValor = "" ;
   this.OV20LancamentoCxaBcoValor = "" ;
   this.ZV21DebitoCredito = "" ;
   this.OV21DebitoCredito = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV22EmpresaPadraoCxaBco = "" ;
   this.ZV22EmpresaPadraoCxaBco = "" ;
   this.OV22EmpresaPadraoCxaBco = "" ;
   this.AV23EmpresaPadraoHist = "" ;
   this.ZV23EmpresaPadraoHist = "" ;
   this.OV23EmpresaPadraoHist = "" ;
   this.AV32Pagina = 0 ;
   this.ZV32Pagina = 0 ;
   this.OV32Pagina = 0 ;
   this.AV33PaginaAux = 0 ;
   this.ZV33PaginaAux = 0 ;
   this.OV33PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV35TotalRegistros = 0 ;
   this.ZV35TotalRegistros = 0 ;
   this.OV35TotalRegistros = 0 ;
   this.AV40SnMonta = "" ;
   this.ZV40SnMonta = "" ;
   this.OV40SnMonta = "" ;
   this.AV17LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.AV30LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.AV18LancamentoCxaBcoDocumento = "" ;
   this.AV16LancamentoCxaBcoHisId = 0 ;
   this.AV28LancamentoCxaBcoHisDescricao = "" ;
   this.AV15LancamentoCxaBcoCaiBanId = 0 ;
   this.AV29LancamentoCxaBcoCaiBanDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22EmpresaPadraoCxaBco = "" ;
   this.AV23EmpresaPadraoHist = "" ;
   this.AV32Pagina = 0 ;
   this.AV33PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV35TotalRegistros = 0 ;
   this.AV40SnMonta = "" ;
   this.AV19PLancamentoCxaBcoNumero = 0 ;
   this.A1933LancamentoCxaBcoValor = 0 ;
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.A1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.A1932LancamentoCxaBcoDocumento = "" ;
   this.A1869LancamentoCxaBcoCaiBanDescrica = "" ;
   this.A1867LancamentoCxaBcoCaiBanEmpId = "" ;
   this.A1868LancamentoCxaBcoCaiBanId = 0 ;
   this.A1872LancamentoCxaBcoHisDescricao = "" ;
   this.A1870LancamentoCxaBcoHisEmpId = "" ;
   this.A1871LancamentoCxaBcoHisId = 0 ;
   this.AV20LancamentoCxaBcoValor = "" ;
   this.AV21DebitoCredito = "" ;
   this.Events = {"e19bu2_client": ["ENTER", true] ,"e11bu2_client": ["'GXM_FIRST'", true] ,"e12bu2_client": ["'GXM_PREVIOUS'", true] ,"e13bu2_client": ["'GXM_NEXT'", true] ,"e14bu2_client": ["'GXM_LAST'", true] ,"e15bu2_client": ["'PROCURAR'", true] ,"e16bu2_client": ["VLANCAMENTOCXABCOHISID.ISVALID", true] ,"e17bu2_client": ["VLANCAMENTOCXABCOCAIBANID.ISVALID", true] ,"e22bu2_client": ["'ATUALIZAPAGINA'", true] ,"e23bu1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV30LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV18LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV16LancamentoCxaBcoHisId',fld:'vLANCAMENTOCXABCOHISID'},{av:'AV15LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40SnMonta',fld:'vSNMONTA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV33PaginaAux',fld:'vPAGINAAUX'},{av:'AV32Pagina',fld:'vPAGINA'}],[{ctrl:'LANCAMENTOCXABCONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCONUMERO","Title")',ctrl:'LANCAMENTOCXABCONUMERO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'LANCAMENTOCXABCODATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCODATA","Title")',ctrl:'LANCAMENTOCXABCODATA',prop:'Title'},{ctrl:'LANCAMENTOCXABCODOCUMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCODOCUMENTO","Title")',ctrl:'LANCAMENTOCXABCODOCUMENTO',prop:'Title'},{ctrl:'LANCAMENTOCXABCOHISID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOHISID","Title")',ctrl:'LANCAMENTOCXABCOHISID',prop:'Title'},{ctrl:'LANCAMENTOCXABCOCAIBANID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOCAIBANID","Title")',ctrl:'LANCAMENTOCXABCOCAIBANID',prop:'Title'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1929LancamentoCxaBcoNumero',fld:'LANCAMENTOCXABCONUMERO'}],[{av:'AV19PLancamentoCxaBcoNumero',fld:'vPLANCAMENTOCXABCONUMERO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV30LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV18LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV16LancamentoCxaBcoHisId',fld:'vLANCAMENTOCXABCOHISID'},{av:'AV15LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV40SnMonta',fld:'vSNMONTA'},{av:'AV33PaginaAux',fld:'vPAGINAAUX'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[{av:'AV32Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV30LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV18LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV16LancamentoCxaBcoHisId',fld:'vLANCAMENTOCXABCOHISID'},{av:'AV15LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV40SnMonta',fld:'vSNMONTA'},{av:'AV33PaginaAux',fld:'vPAGINAAUX'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[{av:'AV32Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV30LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV18LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV16LancamentoCxaBcoHisId',fld:'vLANCAMENTOCXABCOHISID'},{av:'AV15LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV40SnMonta',fld:'vSNMONTA'},{av:'AV33PaginaAux',fld:'vPAGINAAUX'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[{av:'AV32Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV30LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV18LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV16LancamentoCxaBcoHisId',fld:'vLANCAMENTOCXABCOHISID'},{av:'AV15LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV40SnMonta',fld:'vSNMONTA'},{av:'AV33PaginaAux',fld:'vPAGINAAUX'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[{av:'AV32Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV30LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV18LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV16LancamentoCxaBcoHisId',fld:'vLANCAMENTOCXABCOHISID'},{av:'AV15LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV40SnMonta',fld:'vSNMONTA'},{av:'AV33PaginaAux',fld:'vPAGINAAUX'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1928LancamentoCxaBcoEmpresaid',fld:'LANCAMENTOCXABCOEMPRESAID'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1932LancamentoCxaBcoDocumento',fld:'LANCAMENTOCXABCODOCUMENTO'},{av:'A1868LancamentoCxaBcoCaiBanId',fld:'LANCAMENTOCXABCOCAIBANID'},{av:'A1871LancamentoCxaBcoHisId',fld:'LANCAMENTOCXABCOHISID'}],[{av:'AV40SnMonta',fld:'vSNMONTA'},{av:'AV30LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'AV35TotalRegistros',fld:'vTOTALREGISTROS'},{av:'AV36QtdeLinGrid',fld:'vQTDELINGRID'},{av:'AV37Res',fld:'vRES'},{av:'AV38ResInt',fld:'vRESINT'},{av:'AV33PaginaAux',fld:'vPAGINAAUX'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[{av:'AV20LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV21DebitoCredito',fld:'vDEBITOCREDITO'}]];
   this.EvtParms["VLANCAMENTOCXABCOHISID.ISVALID"] = [[{av:'AV23EmpresaPadraoHist',fld:'vEMPRESAPADRAOHIST'},{av:'AV16LancamentoCxaBcoHisId',fld:'vLANCAMENTOCXABCOHISID'}],[{av:'AV28LancamentoCxaBcoHisDescricao',fld:'vLANCAMENTOCXABCOHISDESCRICAO'}]];
   this.EvtParms["VLANCAMENTOCXABCOCAIBANID.ISVALID"] = [[{av:'AV22EmpresaPadraoCxaBco',fld:'vEMPRESAPADRAOCXABCO'},{av:'AV15LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'}],[{av:'AV29LancamentoCxaBcoCaiBanDescricao',fld:'vLANCAMENTOCXABCOCAIBANDESCRICAO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV30LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV18LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV16LancamentoCxaBcoHisId',fld:'vLANCAMENTOCXABCOHISID'},{av:'AV15LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV40SnMonta',fld:'vSNMONTA'},{av:'AV33PaginaAux',fld:'vPAGINAAUX'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[]];
   this.setPrompt("PROMPT_LANCAMENTOCXABCOHISID", [30]);
   this.setPrompt("PROMPT_LANCAMENTOCXABCOCAIBANID", [36]);
   this.setVCMap("A1933LancamentoCxaBcoValor", "LANCAMENTOCXABCOVALOR", 0, "decimal");
   this.setVCMap("AV19PLancamentoCxaBcoNumero", "vPLANCAMENTOCXABCONUMERO", 0, "int");
   this.setVCMap("A1933LancamentoCxaBcoValor", "LANCAMENTOCXABCOVALOR", 0, "decimal");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar({rfrVar:"A1933LancamentoCxaBcoValor"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultalancamentocxabco());
