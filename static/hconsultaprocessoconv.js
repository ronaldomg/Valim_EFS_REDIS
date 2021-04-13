/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:45.27
*/
gx.evt.autoSkip = false;
gx.define('hconsultaprocessoconv', false, function () {
   this.ServerClass =  "hconsultaprocessoconv" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV17PProcessoConvAno=gx.fn.getIntegerValue("vPPROCESSOCONVANO",'.') ;
      this.AV16PProcessoConvNumero=gx.fn.getIntegerValue("vPPROCESSOCONVNUMERO",'.') ;
   };
   this.Valid_Convenioid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVENIOID", gx.fn.currentGridRowImpl(41));
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
   this.e17ni2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11ni2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ni2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ni2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ni2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15ni2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20ni2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21ni1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,33,35,36,42,43,44,45,46,47,48,49,50,51,57,60,62,64,66,68,69,70,71,72,73,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaprocessoconv",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3373,42,"PROCESSOCONVANO","","","ProcessoConvAno","int",0,"px",4,4,"right",null,[],3373,"ProcessoConvAno",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3374,43,"PROCESSOCONVNUMERO","","","ProcessoConvNumero","int",0,"px",8,8,"right",null,[],3374,"ProcessoConvNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3817,44,"PROCESSOCONVDATAINICIO","","","ProcessoConvDataInicio","date",0,"px",10,10,"right",null,[],3817,"ProcessoConvDataInicio",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3815,45,"PROCESSOCONVSITUACAO","","ProcessoConvSituacao","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Finalidade",46,"vFINALIDADE","","","Finalidade","svchar",0,"px",65,65,"left",null,[],"Finalidade","Finalidade",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3819,47,"PROCESSOCONVFINALIDADE","Finalidade","","ProcessoConvFinalidade","svchar",0,"px",100,80,"left",null,[],3819,"ProcessoConvFinalidade",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1681,48,"CONVENIOID","","","ConvenioId","int",0,"px",7,7,"right",null,[],1681,"ConvenioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2082,49,"CONVENIODESCRICAO","","","ConvenioDescricao","svchar",0,"px",40,40,"left",null,[],2082,"ConvenioDescricao",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Conveniodescricaogrid",50,"vCONVENIODESCRICAOGRID","Descrição do Convênio","","ConvenioDescricaoGrid","svchar",0,"px",40,40,"left",null,[],"Conveniodescricaogrid","ConvenioDescricaoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3820,51,"PROCESSOCONVVALOR","","","ProcessoConvValor","decimal",0,"px",22,22,"right",null,[],3820,"ProcessoConvValor",true,2,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLERANGEPROCESSOS",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVANO",gxz:"ZV18ProcessoConvAno",gxold:"OV18ProcessoConvAno",gxvar:"AV18ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ProcessoConvAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVANO",gx.O.AV18ProcessoConvAno,0)},c2v:function(){gx.O.AV18ProcessoConvAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVANO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVNUMERO",gxz:"ZV19ProcessoConvNumero",gxold:"OV19ProcessoConvNumero",gxvar:"AV19ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19ProcessoConvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVNUMERO",gx.O.AV19ProcessoConvNumero,0)},c2v:function(){gx.O.AV19ProcessoConvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVFINALIDADE",gxz:"ZV20ProcessoConvFinalidade",gxold:"OV20ProcessoConvFinalidade",gxvar:"AV20ProcessoConvFinalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ProcessoConvFinalidade=Value},v2z:function(Value){gx.O.ZV20ProcessoConvFinalidade=Value},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVFINALIDADE",gx.O.AV20ProcessoConvFinalidade,0)},c2v:function(){gx.O.AV20ProcessoConvFinalidade=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOCONVFINALIDADE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSTPROCESSO",gxz:"ZV31StProcesso",gxold:"OV31StProcesso",gxvar:"AV31StProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV31StProcesso=Value},v2z:function(Value){gx.O.ZV31StProcesso=Value},v2c:function(){gx.fn.setComboBoxValue("vSTPROCESSO",gx.O.AV31StProcesso)},c2v:function(){gx.O.AV31StProcesso=this.val()},val:function(){return gx.fn.getControlValue("vSTPROCESSO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOID",gxz:"ZV21ConvenioId",gxold:"OV21ConvenioId",gxvar:"AV21ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV21ConvenioId,0)},c2v:function(){gx.O.AV21ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV22ConvenioDescricao",gxold:"OV22ConvenioDescricao",gxvar:"AV22ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV22ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV22ConvenioDescricao,0)},c2v:function(){gx.O.AV22ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVANO",gxz:"Z3373ProcessoConvAno",gxold:"O3373ProcessoConvAno",gxvar:"A3373ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3373ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3373ProcessoConvAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVANO",row || gx.fn.currentGridRowImpl(41),gx.O.A3373ProcessoConvAno,0)},c2v:function(){gx.O.A3373ProcessoConvAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOCONVANO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVNUMERO",gxz:"Z3374ProcessoConvNumero",gxold:"O3374ProcessoConvNumero",gxvar:"A3374ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3374ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3374ProcessoConvNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(41),gx.O.A3374ProcessoConvNumero,0)},c2v:function(){gx.O.A3374ProcessoConvNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVDATAINICIO",gxz:"Z3817ProcessoConvDataInicio",gxold:"O3817ProcessoConvDataInicio",gxvar:"A3817ProcessoConvDataInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3817ProcessoConvDataInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3817ProcessoConvDataInicio=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVDATAINICIO",row || gx.fn.currentGridRowImpl(41),gx.O.A3817ProcessoConvDataInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3817ProcessoConvDataInicio=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PROCESSOCONVDATAINICIO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVSITUACAO",gxz:"Z3815ProcessoConvSituacao",gxold:"O3815ProcessoConvSituacao",gxvar:"A3815ProcessoConvSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3815ProcessoConvSituacao=Value},v2z:function(Value){gx.O.Z3815ProcessoConvSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PROCESSOCONVSITUACAO",row || gx.fn.currentGridRowImpl(41),gx.O.A3815ProcessoConvSituacao)},c2v:function(){gx.O.A3815ProcessoConvSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOCONVSITUACAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:65,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vFINALIDADE",gxz:"ZV23Finalidade",gxold:"OV23Finalidade",gxvar:"AV23Finalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV23Finalidade=Value},v2z:function(Value){gx.O.ZV23Finalidade=Value},v2c:function(row){gx.fn.setGridControlValue("vFINALIDADE",row || gx.fn.currentGridRowImpl(41),gx.O.AV23Finalidade,0)},c2v:function(){gx.O.AV23Finalidade=this.val()},val:function(row){return gx.fn.getGridControlValue("vFINALIDADE",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVFINALIDADE",gxz:"Z3819ProcessoConvFinalidade",gxold:"O3819ProcessoConvFinalidade",gxvar:"A3819ProcessoConvFinalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3819ProcessoConvFinalidade=Value},v2z:function(Value){gx.O.Z3819ProcessoConvFinalidade=Value},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVFINALIDADE",row || gx.fn.currentGridRowImpl(41),gx.O.A3819ProcessoConvFinalidade,0)},c2v:function(){gx.O.A3819ProcessoConvFinalidade=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOCONVFINALIDADE",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Convenioid,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOID",row || gx.fn.currentGridRowImpl(41),gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVENIOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIODESCRICAO",gxz:"Z2082ConvenioDescricao",gxold:"O2082ConvenioDescricao",gxvar:"A2082ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2082ConvenioDescricao=Value},v2z:function(Value){gx.O.Z2082ConvenioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A2082ConvenioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2082ConvenioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAOGRID",gxz:"ZV30ConvenioDescricaoGrid",gxold:"OV30ConvenioDescricaoGrid",gxvar:"AV30ConvenioDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30ConvenioDescricaoGrid=Value},v2z:function(Value){gx.O.ZV30ConvenioDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vCONVENIODESCRICAOGRID",row || gx.fn.currentGridRowImpl(41),gx.O.AV30ConvenioDescricaoGrid,0)},c2v:function(){gx.O.AV30ConvenioDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONVENIODESCRICAOGRID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVVALOR",gxz:"Z3820ProcessoConvValor",gxold:"O3820ProcessoConvValor",gxvar:"A3820ProcessoConvValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3820ProcessoConvValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3820ProcessoConvValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PROCESSOCONVVALOR",row || gx.fn.currentGridRowImpl(41),gx.O.A3820ProcessoConvValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3820ProcessoConvValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PROCESSOCONVVALOR",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TABLENAV",grid:0};
   GXValidFnc[60]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[62]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[64]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[66]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[68]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[69]={fld:"JS", format:2,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV28Pagina",gxold:"OV28Pagina",gxvar:"AV28Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV28Pagina)},c2v:function(){gx.O.AV28Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV29PaginaAux",gxold:"OV29PaginaAux",gxvar:"AV29PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV29PaginaAux,0)},c2v:function(){gx.O.AV29PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV26ConvenioEmpresaId",gxold:"OV26ConvenioEmpresaId",gxvar:"AV26ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV26ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV26ConvenioEmpresaId,0)},c2v:function(){gx.O.AV26ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV18ProcessoConvAno = 0 ;
   this.ZV18ProcessoConvAno = 0 ;
   this.OV18ProcessoConvAno = 0 ;
   this.AV19ProcessoConvNumero = 0 ;
   this.ZV19ProcessoConvNumero = 0 ;
   this.OV19ProcessoConvNumero = 0 ;
   this.AV20ProcessoConvFinalidade = "" ;
   this.ZV20ProcessoConvFinalidade = "" ;
   this.OV20ProcessoConvFinalidade = "" ;
   this.AV31StProcesso = "" ;
   this.ZV31StProcesso = "" ;
   this.OV31StProcesso = "" ;
   this.AV21ConvenioId = 0 ;
   this.ZV21ConvenioId = 0 ;
   this.OV21ConvenioId = 0 ;
   this.AV22ConvenioDescricao = "" ;
   this.ZV22ConvenioDescricao = "" ;
   this.OV22ConvenioDescricao = "" ;
   this.Z3373ProcessoConvAno = 0 ;
   this.O3373ProcessoConvAno = 0 ;
   this.Z3374ProcessoConvNumero = 0 ;
   this.O3374ProcessoConvNumero = 0 ;
   this.Z3817ProcessoConvDataInicio = gx.date.nullDate() ;
   this.O3817ProcessoConvDataInicio = gx.date.nullDate() ;
   this.Z3815ProcessoConvSituacao = "" ;
   this.O3815ProcessoConvSituacao = "" ;
   this.ZV23Finalidade = "" ;
   this.OV23Finalidade = "" ;
   this.Z3819ProcessoConvFinalidade = "" ;
   this.O3819ProcessoConvFinalidade = "" ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.Z2082ConvenioDescricao = "" ;
   this.O2082ConvenioDescricao = "" ;
   this.ZV30ConvenioDescricaoGrid = "" ;
   this.OV30ConvenioDescricaoGrid = "" ;
   this.Z3820ProcessoConvValor = 0 ;
   this.O3820ProcessoConvValor = 0 ;
   this.AV28Pagina = 0 ;
   this.ZV28Pagina = 0 ;
   this.OV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.ZV29PaginaAux = 0 ;
   this.OV29PaginaAux = 0 ;
   this.AV26ConvenioEmpresaId = "" ;
   this.ZV26ConvenioEmpresaId = "" ;
   this.OV26ConvenioEmpresaId = "" ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18ProcessoConvAno = 0 ;
   this.AV19ProcessoConvNumero = 0 ;
   this.AV20ProcessoConvFinalidade = "" ;
   this.AV31StProcesso = "" ;
   this.AV21ConvenioId = 0 ;
   this.AV22ConvenioDescricao = "" ;
   this.AV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.AV26ConvenioEmpresaId = "" ;
   this.AV5Orderedby = 0 ;
   this.AV17PProcessoConvAno = 0 ;
   this.AV16PProcessoConvNumero = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3817ProcessoConvDataInicio = gx.date.nullDate() ;
   this.A3815ProcessoConvSituacao = "" ;
   this.AV23Finalidade = "" ;
   this.A3819ProcessoConvFinalidade = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.AV30ConvenioDescricaoGrid = "" ;
   this.A3820ProcessoConvValor = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17ni2_client": ["ENTER", true] ,"e11ni2_client": ["'GXM_FIRST'", true] ,"e12ni2_client": ["'GXM_PREVIOUS'", true] ,"e13ni2_client": ["'GXM_NEXT'", true] ,"e14ni2_client": ["'GXM_LAST'", true] ,"e15ni2_client": ["'PROCURAR'", true] ,"e20ni2_client": ["'ATUALIZAPAGINA'", true] ,"e21ni1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV19ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV20ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV31StProcesso',fld:'vSTPROCESSO'},{av:'AV21ConvenioId',fld:'vCONVENIOID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'PROCESSOCONVANO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROCESSOCONVANO","Title")',ctrl:'PROCESSOCONVANO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'PROCESSOCONVNUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROCESSOCONVNUMERO","Title")',ctrl:'PROCESSOCONVNUMERO',prop:'Title'},{ctrl:'PROCESSOCONVDATAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROCESSOCONVDATAINICIO","Title")',ctrl:'PROCESSOCONVDATAINICIO',prop:'Title'},{ctrl:'PROCESSOCONVSITUACAO'},{ctrl:'vFINALIDADE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vFINALIDADE","Title")',ctrl:'vFINALIDADE',prop:'Title'},{ctrl:'CONVENIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOID","Title")',ctrl:'CONVENIOID',prop:'Title'},{ctrl:'CONVENIODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIODESCRICAO","Title")',ctrl:'CONVENIODESCRICAO',prop:'Title'},{ctrl:'PROCESSOCONVVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROCESSOCONVVALOR","Title")',ctrl:'PROCESSOCONVVALOR',prop:'Title'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV27NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'}],[{av:'AV17PProcessoConvAno',fld:'vPPROCESSOCONVANO'},{av:'AV16PProcessoConvNumero',fld:'vPPROCESSOCONVNUMERO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV19ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV20ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV31StProcesso',fld:'vSTPROCESSO'},{av:'AV21ConvenioId',fld:'vCONVENIOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV19ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV20ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV31StProcesso',fld:'vSTPROCESSO'},{av:'AV21ConvenioId',fld:'vCONVENIOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV28Pagina',fld:'vPAGINA'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV19ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV20ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV31StProcesso',fld:'vSTPROCESSO'},{av:'AV21ConvenioId',fld:'vCONVENIOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV19ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV20ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV31StProcesso',fld:'vSTPROCESSO'},{av:'AV21ConvenioId',fld:'vCONVENIOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV19ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV20ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV31StProcesso',fld:'vSTPROCESSO'},{av:'AV21ConvenioId',fld:'vCONVENIOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV9EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV32OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["LOAD"] = [[{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'}],[{av:'AV23Finalidade',fld:'vFINALIDADE'},{av:'gx.fn.getCtrlProperty("vFINALIDADE","Tooltiptext")',ctrl:'vFINALIDADE',prop:'Tooltiptext'},{av:'AV30ConvenioDescricaoGrid',fld:'vCONVENIODESCRICAOGRID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV19ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV20ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV31StProcesso',fld:'vSTPROCESSO'},{av:'AV21ConvenioId',fld:'vCONVENIOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'}],[]];
   this.setPrompt("PROMPT_CONVENIOID", [35]);
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17PProcessoConvAno", "vPPROCESSOCONVANO", 0, "int");
   this.setVCMap("AV16PProcessoConvNumero", "vPPROCESSOCONVNUMERO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A3819ProcessoConvFinalidade", rfrProp:"Value", gxAttId:"3819"});
   GridContainer.addRefreshingVar({rfrVar:"A2082ConvenioDescricao", rfrProp:"Value", gxAttId:"2082"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaprocessoconv());
