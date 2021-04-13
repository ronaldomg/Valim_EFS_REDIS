/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:26:4.14
*/
gx.evt.autoSkip = false;
gx.define('gx01x0', false, function () {
   this.ServerClass =  "gx01x0" ;
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
      this.AV13pTipoPermissaoId=gx.fn.getIntegerValue("vPTIPOPERMISSAOID",'.') ;
   };
   this.Validv_Ctipopermissaoprivilegio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCTIPOPERMISSAOPRIVILEGIO");
         this.AnyError  = 0;
         if ( ! ( this.AV9cTipoPermissaoPrivilegio == "A" || this.AV9cTipoPermissaoPrivilegio == "P" || this.AV9cTipoPermissaoPrivilegio == "N" || this.AV9cTipoPermissaoPrivilegio == "O" || (""==this.AV9cTipoPermissaoPrivilegio) ) )
         {
            try {
               gxballoon.setError("Campo cTipoPermissaoPrivilegio fora do intervalo");
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
   this.e131j52_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141j51_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,58];
   this.GXLastCtrlId =58;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx01x0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(568,53,"TIPOPERMISSAOID","Código Tipo Termissão","","TipoPermissaoId","int",0,"px",4,4,"right",null,[],568,"TipoPermissaoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(557,54,"TIPOPERMISSAODESCRICAO","Descrição Tipo Permissão","Selecionar","TipoPermissaoDescricao","svchar",0,"px",80,80,"left",null,[],557,"TipoPermissaoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(558,55,"TIPOPERMISSAOSNEMPRESA","Permissão por Empresa?","","TipoPermissaoSnEmpresa","char",0,"px",1,1,"left",null,[],558,"TipoPermissaoSnEmpresa",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPOPERMISSAOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPERMISSAOID",gxz:"ZV6cTipoPermissaoId",gxold:"OV6cTipoPermissaoId",gxvar:"AV6cTipoPermissaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoPermissaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cTipoPermissaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOPERMISSAOID",gx.O.AV6cTipoPermissaoId,0)},c2v:function(){gx.O.AV6cTipoPermissaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOPERMISSAOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPOPERMISSAODESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPERMISSAODESCRICAO",gxz:"ZV7cTipoPermissaoDescricao",gxold:"OV7cTipoPermissaoDescricao",gxvar:"AV7cTipoPermissaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoPermissaoDescricao=Value},v2z:function(Value){gx.O.ZV7cTipoPermissaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTIPOPERMISSAODESCRICAO",gx.O.AV7cTipoPermissaoDescricao,0)},c2v:function(){gx.O.AV7cTipoPermissaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPERMISSAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPOPERMISSAOSNEMPRESA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPERMISSAOSNEMPRESA",gxz:"ZV8cTipoPermissaoSnEmpresa",gxold:"OV8cTipoPermissaoSnEmpresa",gxvar:"AV8cTipoPermissaoSnEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTipoPermissaoSnEmpresa=Value},v2z:function(Value){gx.O.ZV8cTipoPermissaoSnEmpresa=Value},v2c:function(){gx.fn.setControlValue("vCTIPOPERMISSAOSNEMPRESA",gx.O.AV8cTipoPermissaoSnEmpresa,0)},c2v:function(){gx.O.AV8cTipoPermissaoSnEmpresa=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPERMISSAOSNEMPRESA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOPERMISSAOPRIVILEGIO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ctipopermissaoprivilegio,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPERMISSAOPRIVILEGIO",gxz:"ZV9cTipoPermissaoPrivilegio",gxold:"OV9cTipoPermissaoPrivilegio",gxvar:"AV9cTipoPermissaoPrivilegio",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cTipoPermissaoPrivilegio=Value},v2z:function(Value){gx.O.ZV9cTipoPermissaoPrivilegio=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOPERMISSAOPRIVILEGIO",gx.O.AV9cTipoPermissaoPrivilegio)},c2v:function(){gx.O.AV9cTipoPermissaoPrivilegio=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPERMISSAOPRIVILEGIO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPOPERMISSAOUSUARIOLIBERADO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPERMISSAOUSUARIOLIBERADO",gxz:"ZV10cTipoPermissaoUsuarioLiberado",gxold:"OV10cTipoPermissaoUsuarioLiberado",gxvar:"AV10cTipoPermissaoUsuarioLiberado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cTipoPermissaoUsuarioLiberado=Value},v2z:function(Value){gx.O.ZV10cTipoPermissaoUsuarioLiberado=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOPERMISSAOUSUARIOLIBERADO",gx.O.AV10cTipoPermissaoUsuarioLiberado)},c2v:function(){gx.O.AV10cTipoPermissaoUsuarioLiberado=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPERMISSAOUSUARIOLIBERADO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTIPOPERMISSAOUSUARIONAOLIBERADO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPERMISSAOUSUARIONAOLIBERADO",gxz:"ZV11cTipoPermissaoUsuarioNaoLiberado",gxold:"OV11cTipoPermissaoUsuarioNaoLiberado",gxvar:"AV11cTipoPermissaoUsuarioNaoLiberado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cTipoPermissaoUsuarioNaoLiberado=Value},v2z:function(Value){gx.O.ZV11cTipoPermissaoUsuarioNaoLiberado=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOPERMISSAOUSUARIONAOLIBERADO",gx.O.AV11cTipoPermissaoUsuarioNaoLiberado)},c2v:function(){gx.O.AV11cTipoPermissaoUsuarioNaoLiberado=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPERMISSAOUSUARIONAOLIBERADO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTIPOPERMISSAOULTIMOUSUARIOPERMISSAO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPERMISSAOULTIMOUSUARIOPERMISSAO",gxz:"ZV12cTipoPermissaoUltimoUsuarioPermissao",gxold:"OV12cTipoPermissaoUltimoUsuarioPermissao",gxvar:"AV12cTipoPermissaoUltimoUsuarioPermissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTipoPermissaoUltimoUsuarioPermissao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cTipoPermissaoUltimoUsuarioPermissao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOPERMISSAOULTIMOUSUARIOPERMISSAO",gx.O.AV12cTipoPermissaoUltimoUsuarioPermissao,0)},c2v:function(){gx.O.AV12cTipoPermissaoUltimoUsuarioPermissao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOPERMISSAOULTIMOUSUARIOPERMISSAO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPERMISSAOID",gxz:"Z568TipoPermissaoId",gxold:"O568TipoPermissaoId",gxvar:"A568TipoPermissaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A568TipoPermissaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z568TipoPermissaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOPERMISSAOID",row || gx.fn.currentGridRowImpl(51),gx.O.A568TipoPermissaoId,0)},c2v:function(){gx.O.A568TipoPermissaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOPERMISSAOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPERMISSAODESCRICAO",gxz:"Z557TipoPermissaoDescricao",gxold:"O557TipoPermissaoDescricao",gxvar:"A557TipoPermissaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A557TipoPermissaoDescricao=Value},v2z:function(Value){gx.O.Z557TipoPermissaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A557TipoPermissaoDescricao,0)},c2v:function(){gx.O.A557TipoPermissaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPERMISSAOSNEMPRESA",gxz:"Z558TipoPermissaoSnEmpresa",gxold:"O558TipoPermissaoSnEmpresa",gxvar:"A558TipoPermissaoSnEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A558TipoPermissaoSnEmpresa=Value},v2z:function(Value){gx.O.Z558TipoPermissaoSnEmpresa=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPERMISSAOSNEMPRESA",row || gx.fn.currentGridRowImpl(51),gx.O.A558TipoPermissaoSnEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A558TipoPermissaoSnEmpresa=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPERMISSAOSNEMPRESA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLE4",grid:0};
   this.AV6cTipoPermissaoId = 0 ;
   this.ZV6cTipoPermissaoId = 0 ;
   this.OV6cTipoPermissaoId = 0 ;
   this.AV7cTipoPermissaoDescricao = "" ;
   this.ZV7cTipoPermissaoDescricao = "" ;
   this.OV7cTipoPermissaoDescricao = "" ;
   this.AV8cTipoPermissaoSnEmpresa = "" ;
   this.ZV8cTipoPermissaoSnEmpresa = "" ;
   this.OV8cTipoPermissaoSnEmpresa = "" ;
   this.AV9cTipoPermissaoPrivilegio = "" ;
   this.ZV9cTipoPermissaoPrivilegio = "" ;
   this.OV9cTipoPermissaoPrivilegio = "" ;
   this.AV10cTipoPermissaoUsuarioLiberado = "" ;
   this.ZV10cTipoPermissaoUsuarioLiberado = "" ;
   this.OV10cTipoPermissaoUsuarioLiberado = "" ;
   this.AV11cTipoPermissaoUsuarioNaoLiberado = "" ;
   this.ZV11cTipoPermissaoUsuarioNaoLiberado = "" ;
   this.OV11cTipoPermissaoUsuarioNaoLiberado = "" ;
   this.AV12cTipoPermissaoUltimoUsuarioPermissao = 0 ;
   this.ZV12cTipoPermissaoUltimoUsuarioPermissao = 0 ;
   this.OV12cTipoPermissaoUltimoUsuarioPermissao = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z568TipoPermissaoId = 0 ;
   this.O568TipoPermissaoId = 0 ;
   this.Z557TipoPermissaoDescricao = "" ;
   this.O557TipoPermissaoDescricao = "" ;
   this.Z558TipoPermissaoSnEmpresa = "" ;
   this.O558TipoPermissaoSnEmpresa = "" ;
   this.AV6cTipoPermissaoId = 0 ;
   this.AV7cTipoPermissaoDescricao = "" ;
   this.AV8cTipoPermissaoSnEmpresa = "" ;
   this.AV9cTipoPermissaoPrivilegio = "" ;
   this.AV10cTipoPermissaoUsuarioLiberado = "" ;
   this.AV11cTipoPermissaoUsuarioNaoLiberado = "" ;
   this.AV12cTipoPermissaoUltimoUsuarioPermissao = 0 ;
   this.AV13pTipoPermissaoId = 0 ;
   this.A565TipoPermissaoUltimoUsuarioPerm = 0 ;
   this.A561TipoPermissaoUsuarioNaoLiberad = "" ;
   this.A560TipoPermissaoUsuarioLiberado = "" ;
   this.A559TipoPermissaoPrivilegio = "" ;
   this.AV5LinkSelection = "" ;
   this.A568TipoPermissaoId = 0 ;
   this.A557TipoPermissaoDescricao = "" ;
   this.A558TipoPermissaoSnEmpresa = "" ;
   this.Events = {"e131j52_client": ["ENTER", true] ,"e141j51_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPermissaoId',fld:'vCTIPOPERMISSAOID'},{av:'AV7cTipoPermissaoDescricao',fld:'vCTIPOPERMISSAODESCRICAO'},{av:'AV8cTipoPermissaoSnEmpresa',fld:'vCTIPOPERMISSAOSNEMPRESA'},{av:'AV9cTipoPermissaoPrivilegio',fld:'vCTIPOPERMISSAOPRIVILEGIO'},{av:'AV10cTipoPermissaoUsuarioLiberado',fld:'vCTIPOPERMISSAOUSUARIOLIBERADO'},{av:'AV11cTipoPermissaoUsuarioNaoLiberado',fld:'vCTIPOPERMISSAOUSUARIONAOLIBERADO'},{av:'AV12cTipoPermissaoUltimoUsuarioPermissao',fld:'vCTIPOPERMISSAOULTIMOUSUARIOPERMISSAO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'}],[{av:'AV13pTipoPermissaoId',fld:'vPTIPOPERMISSAOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPermissaoId',fld:'vCTIPOPERMISSAOID'},{av:'AV7cTipoPermissaoDescricao',fld:'vCTIPOPERMISSAODESCRICAO'},{av:'AV8cTipoPermissaoSnEmpresa',fld:'vCTIPOPERMISSAOSNEMPRESA'},{av:'AV9cTipoPermissaoPrivilegio',fld:'vCTIPOPERMISSAOPRIVILEGIO'},{av:'AV10cTipoPermissaoUsuarioLiberado',fld:'vCTIPOPERMISSAOUSUARIOLIBERADO'},{av:'AV11cTipoPermissaoUsuarioNaoLiberado',fld:'vCTIPOPERMISSAOUSUARIONAOLIBERADO'},{av:'AV12cTipoPermissaoUltimoUsuarioPermissao',fld:'vCTIPOPERMISSAOULTIMOUSUARIOPERMISSAO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPermissaoId',fld:'vCTIPOPERMISSAOID'},{av:'AV7cTipoPermissaoDescricao',fld:'vCTIPOPERMISSAODESCRICAO'},{av:'AV8cTipoPermissaoSnEmpresa',fld:'vCTIPOPERMISSAOSNEMPRESA'},{av:'AV9cTipoPermissaoPrivilegio',fld:'vCTIPOPERMISSAOPRIVILEGIO'},{av:'AV10cTipoPermissaoUsuarioLiberado',fld:'vCTIPOPERMISSAOUSUARIOLIBERADO'},{av:'AV11cTipoPermissaoUsuarioNaoLiberado',fld:'vCTIPOPERMISSAOUSUARIONAOLIBERADO'},{av:'AV12cTipoPermissaoUltimoUsuarioPermissao',fld:'vCTIPOPERMISSAOULTIMOUSUARIOPERMISSAO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPermissaoId',fld:'vCTIPOPERMISSAOID'},{av:'AV7cTipoPermissaoDescricao',fld:'vCTIPOPERMISSAODESCRICAO'},{av:'AV8cTipoPermissaoSnEmpresa',fld:'vCTIPOPERMISSAOSNEMPRESA'},{av:'AV9cTipoPermissaoPrivilegio',fld:'vCTIPOPERMISSAOPRIVILEGIO'},{av:'AV10cTipoPermissaoUsuarioLiberado',fld:'vCTIPOPERMISSAOUSUARIOLIBERADO'},{av:'AV11cTipoPermissaoUsuarioNaoLiberado',fld:'vCTIPOPERMISSAOUSUARIONAOLIBERADO'},{av:'AV12cTipoPermissaoUltimoUsuarioPermissao',fld:'vCTIPOPERMISSAOULTIMOUSUARIOPERMISSAO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPermissaoId',fld:'vCTIPOPERMISSAOID'},{av:'AV7cTipoPermissaoDescricao',fld:'vCTIPOPERMISSAODESCRICAO'},{av:'AV8cTipoPermissaoSnEmpresa',fld:'vCTIPOPERMISSAOSNEMPRESA'},{av:'AV9cTipoPermissaoPrivilegio',fld:'vCTIPOPERMISSAOPRIVILEGIO'},{av:'AV10cTipoPermissaoUsuarioLiberado',fld:'vCTIPOPERMISSAOUSUARIOLIBERADO'},{av:'AV11cTipoPermissaoUsuarioNaoLiberado',fld:'vCTIPOPERMISSAOUSUARIONAOLIBERADO'},{av:'AV12cTipoPermissaoUltimoUsuarioPermissao',fld:'vCTIPOPERMISSAOULTIMOUSUARIOPERMISSAO'}],[]];
   this.setVCMap("AV13pTipoPermissaoId", "vPTIPOPERMISSAOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx01x0());
