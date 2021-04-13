/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:43:43.90
*/
gx.evt.autoSkip = false;
gx.define('gx0fs0', false, function () {
   this.ServerClass =  "gx0fs0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV13pDadosAdicionaisEmpresaId=gx.fn.getControlValue("vPDADOSADICIONAISEMPRESAID") ;
      this.AV14pDadosAdicionaisCodigo=gx.fn.getIntegerValue("vPDADOSADICIONAISCODIGO",'.') ;
   };
   this.Validv_Cdadosadicionaistipocfo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCDADOSADICIONAISTIPOCFO");
         this.AnyError  = 0;
         if ( ! ( this.AV9cDadosAdicionaisTipoCFO == "0" || this.AV9cDadosAdicionaisTipoCFO == "1" || this.AV9cDadosAdicionaisTipoCFO == "2" || this.AV9cDadosAdicionaisTipoCFO == "3" || this.AV9cDadosAdicionaisTipoCFO == "4" || this.AV9cDadosAdicionaisTipoCFO == "5" || this.AV9cDadosAdicionaisTipoCFO == "6" || this.AV9cDadosAdicionaisTipoCFO == "7" || this.AV9cDadosAdicionaisTipoCFO == "8" || this.AV9cDadosAdicionaisTipoCFO == "9" || this.AV9cDadosAdicionaisTipoCFO == "10" || this.AV9cDadosAdicionaisTipoCFO == "11" || this.AV9cDadosAdicionaisTipoCFO == "12" || this.AV9cDadosAdicionaisTipoCFO == "13" || (""==this.AV9cDadosAdicionaisTipoCFO) ) )
         {
            try {
               gxballoon.setError("Campo cDadosAdicionaisTipoCFO fora do intervalo");
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
   this.e131x82_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141x81_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,61,62,63,64,65,68];
   this.GXLastCtrlId =68;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0fs0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7486,53,"DADOSADICIONAISEMPRESAID","Empresa","","DadosAdicionaisEmpresaId","char",0,"px",10,10,"left",null,[],7486,"DadosAdicionaisEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7487,54,"DADOSADICIONAISCODIGO","Código","","DadosAdicionaisCodigo","int",0,"px",7,7,"right",null,[],7487,"DadosAdicionaisCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7432,55,"DADOSADICIONAISDESCRICAO","Descrição","Selecionar","DadosAdicionaisDescricao","svchar",0,"px",30,30,"left",null,[],7432,"DadosAdicionaisDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(7433,56,"DADOSADICIONAISTIPOCFO","Tipo CFO","DadosAdicionaisTipoCFO","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(7434,57,"DADOSADICIONAISCFOPINI1","CFOPIni1","","DadosAdicionaisCFOPIni1","int",0,"px",4,4,"right",null,[],7434,"DadosAdicionaisCFOPIni1",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7435,58,"DADOSADICIONAISCFOPINI2","CFOPIni2","","DadosAdicionaisCFOPIni2","int",0,"px",4,4,"right",null,[],7435,"DadosAdicionaisCFOPIni2",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7436,59,"DADOSADICIONAISCFOPINI3","CFOPIni3","","DadosAdicionaisCFOPIni3","int",0,"px",4,4,"right",null,[],7436,"DadosAdicionaisCFOPIni3",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7437,60,"DADOSADICIONAISCFOPINI4","CFOPIni4","","DadosAdicionaisCFOPIni4","int",0,"px",4,4,"right",null,[],7437,"DadosAdicionaisCFOPIni4",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7438,61,"DADOSADICIONAISCFOPINI5","CFOPIni5","","DadosAdicionaisCFOPIni5","int",0,"px",4,4,"right",null,[],7438,"DadosAdicionaisCFOPIni5",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7439,62,"DADOSADICIONAISCFOPFIN1","CFOPFin1","","DadosAdicionaisCFOPFin1","int",0,"px",4,4,"right",null,[],7439,"DadosAdicionaisCFOPFin1",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7440,63,"DADOSADICIONAISCFOPFIN2","CFOPFin2","","DadosAdicionaisCFOPFin2","int",0,"px",4,4,"right",null,[],7440,"DadosAdicionaisCFOPFin2",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7441,64,"DADOSADICIONAISCFOPFIN3","CFOPFin3","","DadosAdicionaisCFOPFin3","int",0,"px",4,4,"right",null,[],7441,"DadosAdicionaisCFOPFin3",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7474,65,"DADOSADICIONAISCST01","CST01","","DadosAdicionaisCST01","char",0,"px",4,4,"left",null,[],7474,"DadosAdicionaisCST01",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKDADOSADICIONAISEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDADOSADICIONAISEMPRESAID",gxz:"ZV6cDadosAdicionaisEmpresaId",gxold:"OV6cDadosAdicionaisEmpresaId",gxvar:"AV6cDadosAdicionaisEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cDadosAdicionaisEmpresaId=Value},v2z:function(Value){gx.O.ZV6cDadosAdicionaisEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCDADOSADICIONAISEMPRESAID",gx.O.AV6cDadosAdicionaisEmpresaId,0)},c2v:function(){gx.O.AV6cDadosAdicionaisEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCDADOSADICIONAISEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKDADOSADICIONAISCODIGO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDADOSADICIONAISCODIGO",gxz:"ZV7cDadosAdicionaisCodigo",gxold:"OV7cDadosAdicionaisCodigo",gxvar:"AV7cDadosAdicionaisCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cDadosAdicionaisCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cDadosAdicionaisCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDADOSADICIONAISCODIGO",gx.O.AV7cDadosAdicionaisCodigo,0)},c2v:function(){gx.O.AV7cDadosAdicionaisCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDADOSADICIONAISCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKDADOSADICIONAISDESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDADOSADICIONAISDESCRICAO",gxz:"ZV8cDadosAdicionaisDescricao",gxold:"OV8cDadosAdicionaisDescricao",gxvar:"AV8cDadosAdicionaisDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cDadosAdicionaisDescricao=Value},v2z:function(Value){gx.O.ZV8cDadosAdicionaisDescricao=Value},v2c:function(){gx.fn.setControlValue("vCDADOSADICIONAISDESCRICAO",gx.O.AV8cDadosAdicionaisDescricao,0)},c2v:function(){gx.O.AV8cDadosAdicionaisDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCDADOSADICIONAISDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKDADOSADICIONAISTIPOCFO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cdadosadicionaistipocfo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDADOSADICIONAISTIPOCFO",gxz:"ZV9cDadosAdicionaisTipoCFO",gxold:"OV9cDadosAdicionaisTipoCFO",gxvar:"AV9cDadosAdicionaisTipoCFO",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cDadosAdicionaisTipoCFO=Value},v2z:function(Value){gx.O.ZV9cDadosAdicionaisTipoCFO=Value},v2c:function(){gx.fn.setComboBoxValue("vCDADOSADICIONAISTIPOCFO",gx.O.AV9cDadosAdicionaisTipoCFO)},c2v:function(){gx.O.AV9cDadosAdicionaisTipoCFO=this.val()},val:function(){return gx.fn.getControlValue("vCDADOSADICIONAISTIPOCFO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKDADOSADICIONAISCFOPINI1", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDADOSADICIONAISCFOPINI1",gxz:"ZV10cDadosAdicionaisCFOPIni1",gxold:"OV10cDadosAdicionaisCFOPIni1",gxvar:"AV10cDadosAdicionaisCFOPIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cDadosAdicionaisCFOPIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cDadosAdicionaisCFOPIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDADOSADICIONAISCFOPINI1",gx.O.AV10cDadosAdicionaisCFOPIni1,0)},c2v:function(){gx.O.AV10cDadosAdicionaisCFOPIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDADOSADICIONAISCFOPINI1",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKDADOSADICIONAISCFOPINI2", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDADOSADICIONAISCFOPINI2",gxz:"ZV11cDadosAdicionaisCFOPIni2",gxold:"OV11cDadosAdicionaisCFOPIni2",gxvar:"AV11cDadosAdicionaisCFOPIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cDadosAdicionaisCFOPIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cDadosAdicionaisCFOPIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDADOSADICIONAISCFOPINI2",gx.O.AV11cDadosAdicionaisCFOPIni2,0)},c2v:function(){gx.O.AV11cDadosAdicionaisCFOPIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDADOSADICIONAISCFOPINI2",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKDADOSADICIONAISCFOPINI3", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDADOSADICIONAISCFOPINI3",gxz:"ZV12cDadosAdicionaisCFOPIni3",gxold:"OV12cDadosAdicionaisCFOPIni3",gxvar:"AV12cDadosAdicionaisCFOPIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cDadosAdicionaisCFOPIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cDadosAdicionaisCFOPIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDADOSADICIONAISCFOPINI3",gx.O.AV12cDadosAdicionaisCFOPIni3,0)},c2v:function(){gx.O.AV12cDadosAdicionaisCFOPIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDADOSADICIONAISCFOPINI3",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISEMPRESAID",gxz:"Z7486DadosAdicionaisEmpresaId",gxold:"O7486DadosAdicionaisEmpresaId",gxvar:"A7486DadosAdicionaisEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7486DadosAdicionaisEmpresaId=Value},v2z:function(Value){gx.O.Z7486DadosAdicionaisEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A7486DadosAdicionaisEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7486DadosAdicionaisEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("DADOSADICIONAISEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCODIGO",gxz:"Z7487DadosAdicionaisCodigo",gxold:"O7487DadosAdicionaisCodigo",gxvar:"A7487DadosAdicionaisCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7487DadosAdicionaisCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7487DadosAdicionaisCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A7487DadosAdicionaisCodigo,0)},c2v:function(){gx.O.A7487DadosAdicionaisCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DADOSADICIONAISCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISDESCRICAO",gxz:"Z7432DadosAdicionaisDescricao",gxold:"O7432DadosAdicionaisDescricao",gxvar:"A7432DadosAdicionaisDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7432DadosAdicionaisDescricao=Value},v2z:function(Value){gx.O.Z7432DadosAdicionaisDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISDESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A7432DadosAdicionaisDescricao,0)},c2v:function(){gx.O.A7432DadosAdicionaisDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("DADOSADICIONAISDESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISTIPOCFO",gxz:"Z7433DadosAdicionaisTipoCFO",gxold:"O7433DadosAdicionaisTipoCFO",gxvar:"A7433DadosAdicionaisTipoCFO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A7433DadosAdicionaisTipoCFO=Value},v2z:function(Value){gx.O.Z7433DadosAdicionaisTipoCFO=Value},v2c:function(row){gx.fn.setGridComboBoxValue("DADOSADICIONAISTIPOCFO",row || gx.fn.currentGridRowImpl(51),gx.O.A7433DadosAdicionaisTipoCFO);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7433DadosAdicionaisTipoCFO=this.val()},val:function(row){return gx.fn.getGridControlValue("DADOSADICIONAISTIPOCFO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCFOPINI1",gxz:"Z7434DadosAdicionaisCFOPIni1",gxold:"O7434DadosAdicionaisCFOPIni1",gxvar:"A7434DadosAdicionaisCFOPIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7434DadosAdicionaisCFOPIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7434DadosAdicionaisCFOPIni1=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISCFOPINI1",row || gx.fn.currentGridRowImpl(51),gx.O.A7434DadosAdicionaisCFOPIni1,0)},c2v:function(){gx.O.A7434DadosAdicionaisCFOPIni1=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DADOSADICIONAISCFOPINI1",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCFOPINI2",gxz:"Z7435DadosAdicionaisCFOPIni2",gxold:"O7435DadosAdicionaisCFOPIni2",gxvar:"A7435DadosAdicionaisCFOPIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7435DadosAdicionaisCFOPIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7435DadosAdicionaisCFOPIni2=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISCFOPINI2",row || gx.fn.currentGridRowImpl(51),gx.O.A7435DadosAdicionaisCFOPIni2,0)},c2v:function(){gx.O.A7435DadosAdicionaisCFOPIni2=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DADOSADICIONAISCFOPINI2",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCFOPINI3",gxz:"Z7436DadosAdicionaisCFOPIni3",gxold:"O7436DadosAdicionaisCFOPIni3",gxvar:"A7436DadosAdicionaisCFOPIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7436DadosAdicionaisCFOPIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7436DadosAdicionaisCFOPIni3=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISCFOPINI3",row || gx.fn.currentGridRowImpl(51),gx.O.A7436DadosAdicionaisCFOPIni3,0)},c2v:function(){gx.O.A7436DadosAdicionaisCFOPIni3=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DADOSADICIONAISCFOPINI3",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCFOPINI4",gxz:"Z7437DadosAdicionaisCFOPIni4",gxold:"O7437DadosAdicionaisCFOPIni4",gxvar:"A7437DadosAdicionaisCFOPIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7437DadosAdicionaisCFOPIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7437DadosAdicionaisCFOPIni4=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISCFOPINI4",row || gx.fn.currentGridRowImpl(51),gx.O.A7437DadosAdicionaisCFOPIni4,0)},c2v:function(){gx.O.A7437DadosAdicionaisCFOPIni4=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DADOSADICIONAISCFOPINI4",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCFOPINI5",gxz:"Z7438DadosAdicionaisCFOPIni5",gxold:"O7438DadosAdicionaisCFOPIni5",gxvar:"A7438DadosAdicionaisCFOPIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7438DadosAdicionaisCFOPIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7438DadosAdicionaisCFOPIni5=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISCFOPINI5",row || gx.fn.currentGridRowImpl(51),gx.O.A7438DadosAdicionaisCFOPIni5,0)},c2v:function(){gx.O.A7438DadosAdicionaisCFOPIni5=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DADOSADICIONAISCFOPINI5",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCFOPFIN1",gxz:"Z7439DadosAdicionaisCFOPFin1",gxold:"O7439DadosAdicionaisCFOPFin1",gxvar:"A7439DadosAdicionaisCFOPFin1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7439DadosAdicionaisCFOPFin1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7439DadosAdicionaisCFOPFin1=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISCFOPFIN1",row || gx.fn.currentGridRowImpl(51),gx.O.A7439DadosAdicionaisCFOPFin1,0)},c2v:function(){gx.O.A7439DadosAdicionaisCFOPFin1=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DADOSADICIONAISCFOPFIN1",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCFOPFIN2",gxz:"Z7440DadosAdicionaisCFOPFin2",gxold:"O7440DadosAdicionaisCFOPFin2",gxvar:"A7440DadosAdicionaisCFOPFin2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7440DadosAdicionaisCFOPFin2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7440DadosAdicionaisCFOPFin2=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISCFOPFIN2",row || gx.fn.currentGridRowImpl(51),gx.O.A7440DadosAdicionaisCFOPFin2,0)},c2v:function(){gx.O.A7440DadosAdicionaisCFOPFin2=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DADOSADICIONAISCFOPFIN2",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCFOPFIN3",gxz:"Z7441DadosAdicionaisCFOPFin3",gxold:"O7441DadosAdicionaisCFOPFin3",gxvar:"A7441DadosAdicionaisCFOPFin3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7441DadosAdicionaisCFOPFin3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7441DadosAdicionaisCFOPFin3=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISCFOPFIN3",row || gx.fn.currentGridRowImpl(51),gx.O.A7441DadosAdicionaisCFOPFin3,0)},c2v:function(){gx.O.A7441DadosAdicionaisCFOPFin3=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DADOSADICIONAISCFOPFIN3",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCST01",gxz:"Z7474DadosAdicionaisCST01",gxold:"O7474DadosAdicionaisCST01",gxvar:"A7474DadosAdicionaisCST01",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7474DadosAdicionaisCST01=Value},v2z:function(Value){gx.O.Z7474DadosAdicionaisCST01=Value},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISCST01",row || gx.fn.currentGridRowImpl(51),gx.O.A7474DadosAdicionaisCST01,0)},c2v:function(){gx.O.A7474DadosAdicionaisCST01=this.val()},val:function(row){return gx.fn.getGridControlValue("DADOSADICIONAISCST01",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TABLE4",grid:0};
   this.AV6cDadosAdicionaisEmpresaId = "" ;
   this.ZV6cDadosAdicionaisEmpresaId = "" ;
   this.OV6cDadosAdicionaisEmpresaId = "" ;
   this.AV7cDadosAdicionaisCodigo = 0 ;
   this.ZV7cDadosAdicionaisCodigo = 0 ;
   this.OV7cDadosAdicionaisCodigo = 0 ;
   this.AV8cDadosAdicionaisDescricao = "" ;
   this.ZV8cDadosAdicionaisDescricao = "" ;
   this.OV8cDadosAdicionaisDescricao = "" ;
   this.AV9cDadosAdicionaisTipoCFO = "" ;
   this.ZV9cDadosAdicionaisTipoCFO = "" ;
   this.OV9cDadosAdicionaisTipoCFO = "" ;
   this.AV10cDadosAdicionaisCFOPIni1 = 0 ;
   this.ZV10cDadosAdicionaisCFOPIni1 = 0 ;
   this.OV10cDadosAdicionaisCFOPIni1 = 0 ;
   this.AV11cDadosAdicionaisCFOPIni2 = 0 ;
   this.ZV11cDadosAdicionaisCFOPIni2 = 0 ;
   this.OV11cDadosAdicionaisCFOPIni2 = 0 ;
   this.AV12cDadosAdicionaisCFOPIni3 = 0 ;
   this.ZV12cDadosAdicionaisCFOPIni3 = 0 ;
   this.OV12cDadosAdicionaisCFOPIni3 = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7486DadosAdicionaisEmpresaId = "" ;
   this.O7486DadosAdicionaisEmpresaId = "" ;
   this.Z7487DadosAdicionaisCodigo = 0 ;
   this.O7487DadosAdicionaisCodigo = 0 ;
   this.Z7432DadosAdicionaisDescricao = "" ;
   this.O7432DadosAdicionaisDescricao = "" ;
   this.Z7433DadosAdicionaisTipoCFO = "" ;
   this.O7433DadosAdicionaisTipoCFO = "" ;
   this.Z7434DadosAdicionaisCFOPIni1 = 0 ;
   this.O7434DadosAdicionaisCFOPIni1 = 0 ;
   this.Z7435DadosAdicionaisCFOPIni2 = 0 ;
   this.O7435DadosAdicionaisCFOPIni2 = 0 ;
   this.Z7436DadosAdicionaisCFOPIni3 = 0 ;
   this.O7436DadosAdicionaisCFOPIni3 = 0 ;
   this.Z7437DadosAdicionaisCFOPIni4 = 0 ;
   this.O7437DadosAdicionaisCFOPIni4 = 0 ;
   this.Z7438DadosAdicionaisCFOPIni5 = 0 ;
   this.O7438DadosAdicionaisCFOPIni5 = 0 ;
   this.Z7439DadosAdicionaisCFOPFin1 = 0 ;
   this.O7439DadosAdicionaisCFOPFin1 = 0 ;
   this.Z7440DadosAdicionaisCFOPFin2 = 0 ;
   this.O7440DadosAdicionaisCFOPFin2 = 0 ;
   this.Z7441DadosAdicionaisCFOPFin3 = 0 ;
   this.O7441DadosAdicionaisCFOPFin3 = 0 ;
   this.Z7474DadosAdicionaisCST01 = "" ;
   this.O7474DadosAdicionaisCST01 = "" ;
   this.AV6cDadosAdicionaisEmpresaId = "" ;
   this.AV7cDadosAdicionaisCodigo = 0 ;
   this.AV8cDadosAdicionaisDescricao = "" ;
   this.AV9cDadosAdicionaisTipoCFO = "" ;
   this.AV10cDadosAdicionaisCFOPIni1 = 0 ;
   this.AV11cDadosAdicionaisCFOPIni2 = 0 ;
   this.AV12cDadosAdicionaisCFOPIni3 = 0 ;
   this.AV13pDadosAdicionaisEmpresaId = "" ;
   this.AV14pDadosAdicionaisCodigo = 0 ;
   this.AV5LinkSelection = "" ;
   this.A7486DadosAdicionaisEmpresaId = "" ;
   this.A7487DadosAdicionaisCodigo = 0 ;
   this.A7432DadosAdicionaisDescricao = "" ;
   this.A7433DadosAdicionaisTipoCFO = "" ;
   this.A7434DadosAdicionaisCFOPIni1 = 0 ;
   this.A7435DadosAdicionaisCFOPIni2 = 0 ;
   this.A7436DadosAdicionaisCFOPIni3 = 0 ;
   this.A7437DadosAdicionaisCFOPIni4 = 0 ;
   this.A7438DadosAdicionaisCFOPIni5 = 0 ;
   this.A7439DadosAdicionaisCFOPFin1 = 0 ;
   this.A7440DadosAdicionaisCFOPFin2 = 0 ;
   this.A7441DadosAdicionaisCFOPFin3 = 0 ;
   this.A7474DadosAdicionaisCST01 = "" ;
   this.Events = {"e131x82_client": ["ENTER", true] ,"e141x81_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDadosAdicionaisEmpresaId',fld:'vCDADOSADICIONAISEMPRESAID'},{av:'AV7cDadosAdicionaisCodigo',fld:'vCDADOSADICIONAISCODIGO'},{av:'AV8cDadosAdicionaisDescricao',fld:'vCDADOSADICIONAISDESCRICAO'},{av:'AV9cDadosAdicionaisTipoCFO',fld:'vCDADOSADICIONAISTIPOCFO'},{av:'AV10cDadosAdicionaisCFOPIni1',fld:'vCDADOSADICIONAISCFOPINI1'},{av:'AV11cDadosAdicionaisCFOPIni2',fld:'vCDADOSADICIONAISCFOPINI2'},{av:'AV12cDadosAdicionaisCFOPIni3',fld:'vCDADOSADICIONAISCFOPINI3'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7486DadosAdicionaisEmpresaId',fld:'DADOSADICIONAISEMPRESAID'},{av:'A7487DadosAdicionaisCodigo',fld:'DADOSADICIONAISCODIGO'}],[{av:'AV13pDadosAdicionaisEmpresaId',fld:'vPDADOSADICIONAISEMPRESAID'},{av:'AV14pDadosAdicionaisCodigo',fld:'vPDADOSADICIONAISCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDadosAdicionaisEmpresaId',fld:'vCDADOSADICIONAISEMPRESAID'},{av:'AV7cDadosAdicionaisCodigo',fld:'vCDADOSADICIONAISCODIGO'},{av:'AV8cDadosAdicionaisDescricao',fld:'vCDADOSADICIONAISDESCRICAO'},{av:'AV9cDadosAdicionaisTipoCFO',fld:'vCDADOSADICIONAISTIPOCFO'},{av:'AV10cDadosAdicionaisCFOPIni1',fld:'vCDADOSADICIONAISCFOPINI1'},{av:'AV11cDadosAdicionaisCFOPIni2',fld:'vCDADOSADICIONAISCFOPINI2'},{av:'AV12cDadosAdicionaisCFOPIni3',fld:'vCDADOSADICIONAISCFOPINI3'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDadosAdicionaisEmpresaId',fld:'vCDADOSADICIONAISEMPRESAID'},{av:'AV7cDadosAdicionaisCodigo',fld:'vCDADOSADICIONAISCODIGO'},{av:'AV8cDadosAdicionaisDescricao',fld:'vCDADOSADICIONAISDESCRICAO'},{av:'AV9cDadosAdicionaisTipoCFO',fld:'vCDADOSADICIONAISTIPOCFO'},{av:'AV10cDadosAdicionaisCFOPIni1',fld:'vCDADOSADICIONAISCFOPINI1'},{av:'AV11cDadosAdicionaisCFOPIni2',fld:'vCDADOSADICIONAISCFOPINI2'},{av:'AV12cDadosAdicionaisCFOPIni3',fld:'vCDADOSADICIONAISCFOPINI3'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDadosAdicionaisEmpresaId',fld:'vCDADOSADICIONAISEMPRESAID'},{av:'AV7cDadosAdicionaisCodigo',fld:'vCDADOSADICIONAISCODIGO'},{av:'AV8cDadosAdicionaisDescricao',fld:'vCDADOSADICIONAISDESCRICAO'},{av:'AV9cDadosAdicionaisTipoCFO',fld:'vCDADOSADICIONAISTIPOCFO'},{av:'AV10cDadosAdicionaisCFOPIni1',fld:'vCDADOSADICIONAISCFOPINI1'},{av:'AV11cDadosAdicionaisCFOPIni2',fld:'vCDADOSADICIONAISCFOPINI2'},{av:'AV12cDadosAdicionaisCFOPIni3',fld:'vCDADOSADICIONAISCFOPINI3'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDadosAdicionaisEmpresaId',fld:'vCDADOSADICIONAISEMPRESAID'},{av:'AV7cDadosAdicionaisCodigo',fld:'vCDADOSADICIONAISCODIGO'},{av:'AV8cDadosAdicionaisDescricao',fld:'vCDADOSADICIONAISDESCRICAO'},{av:'AV9cDadosAdicionaisTipoCFO',fld:'vCDADOSADICIONAISTIPOCFO'},{av:'AV10cDadosAdicionaisCFOPIni1',fld:'vCDADOSADICIONAISCFOPINI1'},{av:'AV11cDadosAdicionaisCFOPIni2',fld:'vCDADOSADICIONAISCFOPINI2'},{av:'AV12cDadosAdicionaisCFOPIni3',fld:'vCDADOSADICIONAISCFOPINI3'}],[]];
   this.setVCMap("AV13pDadosAdicionaisEmpresaId", "vPDADOSADICIONAISEMPRESAID", 0, "char");
   this.setVCMap("AV14pDadosAdicionaisCodigo", "vPDADOSADICIONAISCODIGO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0fs0());
