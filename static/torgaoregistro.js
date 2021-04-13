/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:51:28.71
*/
gx.evt.autoSkip = false;
gx.define('torgaoregistro', false, function () {
   this.ServerClass =  "torgaoregistro" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV25EmpresaOrgaoRegistroEmpresaId=gx.fn.getControlValue("vEMPRESAORGAOREGISTROEMPRESAID") ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV29OrgaoRegistroCadastroJunta=gx.fn.getControlValue("vORGAOREGISTROCADASTROJUNTA") ;
      this.A402OrgaoRegistroQuantidadeRespons=gx.fn.getIntegerValue("ORGAOREGISTROQUANTIDADERESPONS",'.') ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A408OrgaoRegistroUltimoResponsavel=gx.fn.getIntegerValue("ORGAOREGISTROULTIMORESPONSAVEL",'.') ;
      this.AV33Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV9Erro=gx.fn.getIntegerValue("vERRO",'.') ;
   };
   this.Valid_Empresaorgaoregistroempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresaorgaoregistroempresaid",["gx.O.A409EmpresaOrgaoRegistroEmpresaId", "gx.O.A398EmpresaOrgaoRegistroNome", "gx.O.A402OrgaoRegistroQuantidadeRespons"],["A398EmpresaOrgaoRegistroNome", "A402OrgaoRegistroQuantidadeRespons"]);
      return true;
   }
   this.Valid_Orgaoregistroinscestadual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORGAOREGISTROINSCESTADUAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Orgaoregistrocadastrojunta=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Orgaoregistrocadastrojunta",["gx.O.A400OrgaoRegistroCadastroJunta", "gx.O.AV29OrgaoRegistroCadastroJunta"],["AV29OrgaoRegistroCadastroJunta"]);
      return true;
   }
   this.Valid_Orgaoregistrodatacadastrojunta=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Orgaoregistrodatacadastrojunta",["gx.O.Gx_mode", "gx.O.AV29OrgaoRegistroCadastroJunta", 'gx.date.urlDate(gx.O.A401OrgaoRegistroDataCadastroJunta,"DMY4")', "gx.O.A402OrgaoRegistroQuantidadeRespons", "gx.O.AV10ret"],["AV10ret"]);
      try {
         if ( ! (""==this.AV29OrgaoRegistroCadastroJunta) && (new gx.date.gxdate("").compare(this.A401OrgaoRegistroDataCadastroJunta)==0) && gx.ajax.aggSelInteger("vRET","4",["gx.O.AV29OrgaoRegistroCadastroJunta",'gx.date.urlDate(gx.O.A401OrgaoRegistroDataCadastroJunta,"DMY4")',"gx.O.A402OrgaoRegistroQuantidadeRespons"]) )
         {
            this.AV10ret = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( this.A402OrgaoRegistroQuantidadeRespons <= 0 && gx.ajax.aggSelInteger("vRET","4",["gx.O.AV29OrgaoRegistroCadastroJunta",'gx.date.urlDate(gx.O.A401OrgaoRegistroDataCadastroJunta,"DMY4")',"gx.O.A402OrgaoRegistroQuantidadeRespons"]) )
            {
               this.AV10ret = gx.num.trunc( 1 ,0) ;
            }
            else
            {
               if ( this.A402OrgaoRegistroQuantidadeRespons > 4 && ! (this.Gx_mode == 'DLT') && gx.ajax.aggSelInteger("vRET","4",["gx.O.AV29OrgaoRegistroCadastroJunta",'gx.date.urlDate(gx.O.A401OrgaoRegistroDataCadastroJunta,"DMY4")',"gx.O.A402OrgaoRegistroQuantidadeRespons"]) )
               {
                  this.AV10ret = gx.num.trunc( 1 ,0) ;
               }
            }
         }
      }
      catch(e){}
      return true;
   }
   this.Valid_Orgaoregistronire=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Orgaoregistronire",["gx.O.O403OrgaoRegistroNIRE", 'gx.date.urlDate(gx.O.O401OrgaoRegistroDataCadastroJunta,"DMY4")', "gx.O.O400OrgaoRegistroCadastroJunta", "gx.O.O399OrgaoRegistroInscEstadual", "gx.O.AV7UsrCod", "gx.O.A399OrgaoRegistroInscEstadual", "gx.O.A400OrgaoRegistroCadastroJunta", 'gx.date.urlDate(gx.O.A401OrgaoRegistroDataCadastroJunta,"DMY4")', "gx.O.A403OrgaoRegistroNIRE", "gx.O.A793OrgaoRegistroUsuarioId", 'gx.date.urlDateTime(gx.O.A794OrgaoRegistroDataHoraAlt,"DMY4")'],["A793OrgaoRegistroUsuarioId", "A794OrgaoRegistroDataHoraAlt"]);
      return true;
   }
   this.Valid_Responsavelsequencia=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("RESPONSAVELSEQUENCIA", gx.fn.currentGridRowImpl(42));
         this.AnyError  = 0;
         this.sMode44 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(44,42)  ;
         this.standaloneModal0W44( );
         this.standaloneNotModal0W44( );
         if ( gx.fn.gridDuplicateKey(44) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Responsáveis", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode44  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Responsavelnome=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("RESPONSAVELNOME", gx.fn.currentGridRowImpl(42));
         this.AnyError  = 0;
         this.sMode44 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(44,42)  ;
         try {
            this.A402OrgaoRegistroQuantidadeRespons = gx.num.trunc( gx.fn.countFrm( "A404ResponsavelNome" , 0 , 42 , gx.trueFn , [] ) ,0) ;
         }
         catch(e){}

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode44  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Responsavelcargo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("RESPONSAVELCARGO", gx.fn.currentGridRowImpl(42));
         this.AnyError  = 0;
         this.sMode44 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(44,42)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode44  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Responsavelcrc=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("RESPONSAVELCRC", gx.fn.currentGridRowImpl(42));
         this.AnyError  = 0;
         this.sMode44 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(44,42)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode44  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Responsavelcpf=function()
   {
      this.sMode44 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(44,42)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Responsavelcpf",["gx.O.Gx_mode", "gx.O.O407ResponsavelCPF", "gx.O.O406ResponsavelCRC", "gx.O.O405ResponsavelCargo", "gx.O.O404ResponsavelNome", "gx.O.A407ResponsavelCPF", "gx.O.AV29OrgaoRegistroCadastroJunta", 'gx.date.urlDate(gx.O.A401OrgaoRegistroDataCadastroJunta,"DMY4")', "gx.O.A402OrgaoRegistroQuantidadeRespons", "gx.O.AV9Erro", "gx.O.AV7UsrCod", "gx.O.A404ResponsavelNome", "gx.O.A405ResponsavelCargo", "gx.O.A406ResponsavelCRC", "gx.O.AV10ret", "gx.O.A795ResponsavelUsuarioId", 'gx.date.urlDateTime(gx.O.A796ResponsavelDataHoraAlt,"DMY4")'],["AV9Erro", "AV10ret", "A795ResponsavelUsuarioId", "A796ResponsavelDataHoraAlt"]);
      try {
         if ( ! (""==this.AV29OrgaoRegistroCadastroJunta) && (new gx.date.gxdate("").compare(this.A401OrgaoRegistroDataCadastroJunta)==0) && gx.ajax.aggSelInteger("vRET","14",["gx.O.AV29OrgaoRegistroCadastroJunta",'gx.date.urlDate(gx.O.A401OrgaoRegistroDataCadastroJunta,"DMY4")',"gx.O.A402OrgaoRegistroQuantidadeRespons","gx.O.AV9Erro","gx.O.A407ResponsavelCPF"]) )
         {
            this.AV10ret = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( this.A402OrgaoRegistroQuantidadeRespons <= 0 && gx.ajax.aggSelInteger("vRET","14",["gx.O.AV29OrgaoRegistroCadastroJunta",'gx.date.urlDate(gx.O.A401OrgaoRegistroDataCadastroJunta,"DMY4")',"gx.O.A402OrgaoRegistroQuantidadeRespons","gx.O.AV9Erro","gx.O.A407ResponsavelCPF"]) )
            {
               this.AV10ret = gx.num.trunc( 1 ,0) ;
            }
            else
            {
               if ( this.AV9Erro != 0 && ! (""==this.A407ResponsavelCPF) && gx.ajax.aggSelInteger("vRET","14",["gx.O.AV29OrgaoRegistroCadastroJunta",'gx.date.urlDate(gx.O.A401OrgaoRegistroDataCadastroJunta,"DMY4")',"gx.O.A402OrgaoRegistroQuantidadeRespons","gx.O.AV9Erro","gx.O.A407ResponsavelCPF"]) )
               {
                  this.AV10ret = gx.num.trunc( 1 ,0) ;
               }
               else
               {
                  if ( this.A402OrgaoRegistroQuantidadeRespons > 4 && ! (this.Gx_mode == 'DLT') && gx.ajax.aggSelInteger("vRET","14",["gx.O.AV29OrgaoRegistroCadastroJunta",'gx.date.urlDate(gx.O.A401OrgaoRegistroDataCadastroJunta,"DMY4")',"gx.O.A402OrgaoRegistroQuantidadeRespons","gx.O.AV9Erro","gx.O.A407ResponsavelCPF"]) )
                  {
                     this.AV10ret = gx.num.trunc( 1 ,0) ;
                  }
               }
            }
         }
      }
      catch(e){}
      this.Gx_mode =  this.sMode44  ;
      return true;
   }
   this.standaloneModal0W44=function()
   {
      this.A408OrgaoRegistroUltimoResponsavel = gx.num.trunc( gx.fn.serialRule( "A408OrgaoRegistroUltimoResponsavel" , "A410ResponsavelSequencia" , 42 , 1 , this ) ,0) ;
      return true;
   }
   this.standaloneNotModal0W44=function()
   {
      try {
         gx.fn.setCtrlProperty("RESPONSAVELSEQUENCIA","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("RESPONSAVELUSUARIOID","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("RESPONSAVELDATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.e120w2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130w2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140w43_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150w43_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,17,20,22,25,27,30,32,35,37,38,41,43,44,45,46,47,48,49,50,51,54,57,59,61,72,73,75];
   this.GXLastCtrlId =75;
   this.Grid1Container = new gx.grid.grid(this, 44,"Responsavel",42,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"torgaoregistro",[410],false,1,true,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_44",43,"vNRCDDELETED_44","","","nRcdDeleted_44","int",0,"px",4,1,"right",null,[],"nRcdDeleted_44","nRcdDeleted_44",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(410,44,"RESPONSAVELSEQUENCIA","Sequência","","ResponsavelSequencia","int",0,"px",4,4,"right",null,[],410,"ResponsavelSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(404,45,"RESPONSAVELNOME","Nome do Responsável","","ResponsavelNome","svchar",0,"px",40,40,"left",null,[],404,"ResponsavelNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(405,46,"RESPONSAVELCARGO","Cargo do Responsável","","ResponsavelCargo","svchar",0,"px",40,40,"left",null,[],405,"ResponsavelCargo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(406,47,"RESPONSAVELCRC","CRC do Responsável","","ResponsavelCRC","svchar",0,"px",15,15,"left",null,[],406,"ResponsavelCRC",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(407,48,"RESPONSAVELCPF","CPF do Responsável","","ResponsavelCPF","char",0,"px",14,14,"left",null,[],407,"ResponsavelCPF",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(795,49,"RESPONSAVELUSUARIOID","Usuário","","ResponsavelUsuarioId","char",0,"px",12,12,"left",null,[],795,"ResponsavelUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(796,50,"RESPONSAVELDATAHORAALT","Última alteração","","ResponsavelDataHoraAlt","dtime",0,"px",16,16,"right",null,[],796,"ResponsavelDataHoraAlt",true,5,false,false,"SemQuebraGrid",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV26Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV26Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV26Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "torgaoregistro_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.HDMASKCPFContainer = gx.uc.getNew(this, 68, 15, "HDMask", "HDMASKCPFContainer", "Hdmaskcpf");
   var HDMASKCPFContainer = this.HDMASKCPFContainer;
   HDMASKCPFContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKCPFContainer.setDynProp("Picture", "Picture", "", "str");
   HDMASKCPFContainer.setProp("Default", "Default", "", "str");
   HDMASKCPFContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKCPFContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKCPFContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKCPFContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKCPFContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKCPFContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKCPFContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKCPFContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKCPFContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKCPFContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKCPFContainer.setProp("Class", "Class", "", "char");
   HDMASKCPFContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKCPFContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Empresaorgaoregistroempresaid,isvalid:null,rgrid:[this.Grid1Container],fld:"EMPRESAORGAOREGISTROEMPRESAID",gxz:"Z409EmpresaOrgaoRegistroEmpresaId",gxold:"O409EmpresaOrgaoRegistroEmpresaId",gxvar:"A409EmpresaOrgaoRegistroEmpresaId",ucs:[],op:[17],ip:[17,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A409EmpresaOrgaoRegistroEmpresaId=Value},v2z:function(Value){gx.O.Z409EmpresaOrgaoRegistroEmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAORGAOREGISTROEMPRESAID",gx.O.A409EmpresaOrgaoRegistroEmpresaId,0)},c2v:function(){gx.O.A409EmpresaOrgaoRegistroEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAORGAOREGISTROEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAORGAOREGISTRONOME",gxz:"Z398EmpresaOrgaoRegistroNome",gxold:"O398EmpresaOrgaoRegistroNome",gxvar:"A398EmpresaOrgaoRegistroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A398EmpresaOrgaoRegistroNome=Value},v2z:function(Value){gx.O.Z398EmpresaOrgaoRegistroNome=Value},v2c:function(){gx.fn.setControlValue("EMPRESAORGAOREGISTRONOME",gx.O.A398EmpresaOrgaoRegistroNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A398EmpresaOrgaoRegistroNome=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAORGAOREGISTRONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[20]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Orgaoregistroinscestadual,isvalid:null,rgrid:[],fld:"ORGAOREGISTROINSCESTADUAL",gxz:"Z399OrgaoRegistroInscEstadual",gxold:"O399OrgaoRegistroInscEstadual",gxvar:"A399OrgaoRegistroInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A399OrgaoRegistroInscEstadual=Value},v2z:function(Value){gx.O.Z399OrgaoRegistroInscEstadual=Value},v2c:function(){gx.fn.setControlValue("ORGAOREGISTROINSCESTADUAL",gx.O.A399OrgaoRegistroInscEstadual,0)},c2v:function(){gx.O.A399OrgaoRegistroInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("ORGAOREGISTROINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Orgaoregistrocadastrojunta,isvalid:null,rgrid:[],fld:"ORGAOREGISTROCADASTROJUNTA",gxz:"Z400OrgaoRegistroCadastroJunta",gxold:"O400OrgaoRegistroCadastroJunta",gxvar:"A400OrgaoRegistroCadastroJunta",ucs:[],op:[],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A400OrgaoRegistroCadastroJunta=Value},v2z:function(Value){gx.O.Z400OrgaoRegistroCadastroJunta=Value},v2c:function(){gx.fn.setControlValue("ORGAOREGISTROCADASTROJUNTA",gx.O.A400OrgaoRegistroCadastroJunta,0)},c2v:function(){gx.O.A400OrgaoRegistroCadastroJunta=this.val()},val:function(){return gx.fn.getControlValue("ORGAOREGISTROCADASTROJUNTA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Orgaoregistrodatacadastrojunta,isvalid:null,rgrid:[],fld:"ORGAOREGISTRODATACADASTROJUNTA",gxz:"Z401OrgaoRegistroDataCadastroJunta",gxold:"O401OrgaoRegistroDataCadastroJunta",gxvar:"A401OrgaoRegistroDataCadastroJunta",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A401OrgaoRegistroDataCadastroJunta=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z401OrgaoRegistroDataCadastroJunta=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ORGAOREGISTRODATACADASTROJUNTA",gx.O.A401OrgaoRegistroDataCadastroJunta,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A401OrgaoRegistroDataCadastroJunta=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ORGAOREGISTRODATACADASTROJUNTA")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Orgaoregistronire,isvalid:null,rgrid:[],fld:"ORGAOREGISTRONIRE",gxz:"Z403OrgaoRegistroNIRE",gxold:"O403OrgaoRegistroNIRE",gxvar:"A403OrgaoRegistroNIRE",ucs:[],op:[61,59],ip:[61,59,37,32,27,22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A403OrgaoRegistroNIRE=Value},v2z:function(Value){gx.O.Z403OrgaoRegistroNIRE=Value},v2c:function(){gx.fn.setControlValue("ORGAOREGISTRONIRE",gx.O.A403OrgaoRegistroNIRE,0)},c2v:function(){gx.O.A403OrgaoRegistroNIRE=this.val()},val:function(){return gx.fn.getControlValue("ORGAOREGISTRONIRE")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TAB2",grid:0};
   GXValidFnc[41]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[43]={lvl:44,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_44",gxz:"ZnRcdDeleted_44",gxold:"OnRcdDeleted_44",gxvar:"nRcdDeleted_44",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_44=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_44=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_44",row || gx.fn.currentGridRowImpl(42),gx.O.nRcdDeleted_44,0)},c2v:function(){gx.O.nRcdDeleted_44=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_44",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:44,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:1,grid:42,gxgrid:this.Grid1Container,fnc:this.Valid_Responsavelsequencia,isvalid:null,rgrid:[],fld:"RESPONSAVELSEQUENCIA",gxz:"Z410ResponsavelSequencia",gxold:"O410ResponsavelSequencia",gxvar:"A410ResponsavelSequencia",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A410ResponsavelSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z410ResponsavelSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELSEQUENCIA",row || gx.fn.currentGridRowImpl(42),gx.O.A410ResponsavelSequencia,0)},c2v:function(){gx.O.A410ResponsavelSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RESPONSAVELSEQUENCIA",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:44,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:1,grid:42,gxgrid:this.Grid1Container,fnc:this.Valid_Responsavelnome,isvalid:null,rgrid:[],fld:"RESPONSAVELNOME",gxz:"Z404ResponsavelNome",gxold:"O404ResponsavelNome",gxvar:"A404ResponsavelNome",ucs:[],op:[],ip:[45],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A404ResponsavelNome=Value},v2z:function(Value){gx.O.Z404ResponsavelNome=Value},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELNOME",row || gx.fn.currentGridRowImpl(42),gx.O.A404ResponsavelNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A404ResponsavelNome=this.val()},val:function(row){return gx.fn.getGridControlValue("RESPONSAVELNOME",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:44,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:1,grid:42,gxgrid:this.Grid1Container,fnc:this.Valid_Responsavelcargo,isvalid:null,rgrid:[],fld:"RESPONSAVELCARGO",gxz:"Z405ResponsavelCargo",gxold:"O405ResponsavelCargo",gxvar:"A405ResponsavelCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A405ResponsavelCargo=Value},v2z:function(Value){gx.O.Z405ResponsavelCargo=Value},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELCARGO",row || gx.fn.currentGridRowImpl(42),gx.O.A405ResponsavelCargo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A405ResponsavelCargo=this.val()},val:function(row){return gx.fn.getGridControlValue("RESPONSAVELCARGO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:44,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:1,grid:42,gxgrid:this.Grid1Container,fnc:this.Valid_Responsavelcrc,isvalid:null,rgrid:[],fld:"RESPONSAVELCRC",gxz:"Z406ResponsavelCRC",gxold:"O406ResponsavelCRC",gxvar:"A406ResponsavelCRC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A406ResponsavelCRC=Value},v2z:function(Value){gx.O.Z406ResponsavelCRC=Value},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELCRC",row || gx.fn.currentGridRowImpl(42),gx.O.A406ResponsavelCRC,0)},c2v:function(){gx.O.A406ResponsavelCRC=this.val()},val:function(row){return gx.fn.getGridControlValue("RESPONSAVELCRC",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:44,type:"char",len:14,dec:0,sign:false,ro:0,isacc:1,grid:42,gxgrid:this.Grid1Container,fnc:this.Valid_Responsavelcpf,isvalid:null,rgrid:[],fld:"RESPONSAVELCPF",gxz:"Z407ResponsavelCPF",gxold:"O407ResponsavelCPF",gxvar:"A407ResponsavelCPF",ucs:[],op:[50,49],ip:[50,49,47,46,45,32,48],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A407ResponsavelCPF=Value},v2z:function(Value){gx.O.Z407ResponsavelCPF=Value},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELCPF",row || gx.fn.currentGridRowImpl(42),gx.O.A407ResponsavelCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A407ResponsavelCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("RESPONSAVELCPF",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:44,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RESPONSAVELUSUARIOID",gxz:"Z795ResponsavelUsuarioId",gxold:"O795ResponsavelUsuarioId",gxvar:"A795ResponsavelUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A795ResponsavelUsuarioId=Value},v2z:function(Value){gx.O.Z795ResponsavelUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELUSUARIOID",row || gx.fn.currentGridRowImpl(42),gx.O.A795ResponsavelUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A795ResponsavelUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("RESPONSAVELUSUARIOID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:44,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RESPONSAVELDATAHORAALT",gxz:"Z796ResponsavelDataHoraAlt",gxold:"O796ResponsavelDataHoraAlt",gxvar:"A796ResponsavelDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A796ResponsavelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z796ResponsavelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELDATAHORAALT",row || gx.fn.currentGridRowImpl(42),gx.O.A796ResponsavelDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A796ResponsavelDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("RESPONSAVELDATAHORAALT",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[51]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[54]={fld:"TABLE3",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORGAOREGISTROUSUARIOID",gxz:"Z793OrgaoRegistroUsuarioId",gxold:"O793OrgaoRegistroUsuarioId",gxvar:"A793OrgaoRegistroUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A793OrgaoRegistroUsuarioId=Value},v2z:function(Value){gx.O.Z793OrgaoRegistroUsuarioId=Value},v2c:function(){gx.fn.setControlValue("ORGAOREGISTROUSUARIOID",gx.O.A793OrgaoRegistroUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A793OrgaoRegistroUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("ORGAOREGISTROUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[61]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORGAOREGISTRODATAHORAALT",gxz:"Z794OrgaoRegistroDataHoraAlt",gxold:"O794OrgaoRegistroDataHoraAlt",gxvar:"A794OrgaoRegistroDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A794OrgaoRegistroDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z794OrgaoRegistroDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ORGAOREGISTRODATAHORAALT",gx.O.A794OrgaoRegistroDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A794OrgaoRegistroDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ORGAOREGISTRODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[72]={fld:"JS", format:2,grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV21AcessoSistemaSequencia",gxold:"OV21AcessoSistemaSequencia",gxvar:"AV21AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV21AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"BTNHELP",grid:0};
   this.A409EmpresaOrgaoRegistroEmpresaId = "" ;
   this.Z409EmpresaOrgaoRegistroEmpresaId = "" ;
   this.O409EmpresaOrgaoRegistroEmpresaId = "" ;
   this.A398EmpresaOrgaoRegistroNome = "" ;
   this.Z398EmpresaOrgaoRegistroNome = "" ;
   this.O398EmpresaOrgaoRegistroNome = "" ;
   this.A399OrgaoRegistroInscEstadual = "" ;
   this.Z399OrgaoRegistroInscEstadual = "" ;
   this.O399OrgaoRegistroInscEstadual = "" ;
   this.A400OrgaoRegistroCadastroJunta = "" ;
   this.Z400OrgaoRegistroCadastroJunta = "" ;
   this.O400OrgaoRegistroCadastroJunta = "" ;
   this.A401OrgaoRegistroDataCadastroJunta = gx.date.nullDate() ;
   this.Z401OrgaoRegistroDataCadastroJunta = gx.date.nullDate() ;
   this.O401OrgaoRegistroDataCadastroJunta = gx.date.nullDate() ;
   this.A403OrgaoRegistroNIRE = "" ;
   this.Z403OrgaoRegistroNIRE = "" ;
   this.O403OrgaoRegistroNIRE = "" ;
   this.ZnRcdDeleted_44 = 0 ;
   this.OnRcdDeleted_44 = 0 ;
   this.Z410ResponsavelSequencia = 0 ;
   this.O410ResponsavelSequencia = 0 ;
   this.Z404ResponsavelNome = "" ;
   this.O404ResponsavelNome = "" ;
   this.Z405ResponsavelCargo = "" ;
   this.O405ResponsavelCargo = "" ;
   this.Z406ResponsavelCRC = "" ;
   this.O406ResponsavelCRC = "" ;
   this.Z407ResponsavelCPF = "" ;
   this.O407ResponsavelCPF = "" ;
   this.Z795ResponsavelUsuarioId = "" ;
   this.O795ResponsavelUsuarioId = "" ;
   this.Z796ResponsavelDataHoraAlt = gx.date.nullDate() ;
   this.O796ResponsavelDataHoraAlt = gx.date.nullDate() ;
   this.A793OrgaoRegistroUsuarioId = "" ;
   this.Z793OrgaoRegistroUsuarioId = "" ;
   this.O793OrgaoRegistroUsuarioId = "" ;
   this.A794OrgaoRegistroDataHoraAlt = gx.date.nullDate() ;
   this.Z794OrgaoRegistroDataHoraAlt = gx.date.nullDate() ;
   this.O794OrgaoRegistroDataHoraAlt = gx.date.nullDate() ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.ZV21AcessoSistemaSequencia = 0 ;
   this.OV21AcessoSistemaSequencia = 0 ;
   this.A410ResponsavelSequencia = 0 ;
   this.A795ResponsavelUsuarioId = "" ;
   this.A796ResponsavelDataHoraAlt = gx.date.nullDate() ;
   this.A404ResponsavelNome = "" ;
   this.A405ResponsavelCargo = "" ;
   this.A406ResponsavelCRC = "" ;
   this.A407ResponsavelCPF = "" ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV32Pgmname = "" ;
   this.AV33Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV30MascaraValores = {} ;
   this.AV9Erro = 0 ;
   this.AV10ret = 0 ;
   this.AV25EmpresaOrgaoRegistroEmpresaId = "" ;
   this.A409EmpresaOrgaoRegistroEmpresaId = "" ;
   this.AV29OrgaoRegistroCadastroJunta = "" ;
   this.A793OrgaoRegistroUsuarioId = "" ;
   this.A794OrgaoRegistroDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A398EmpresaOrgaoRegistroNome = "" ;
   this.A399OrgaoRegistroInscEstadual = "" ;
   this.A400OrgaoRegistroCadastroJunta = "" ;
   this.A401OrgaoRegistroDataCadastroJunta = gx.date.nullDate() ;
   this.A402OrgaoRegistroQuantidadeRespons = 0 ;
   this.A403OrgaoRegistroNIRE = "" ;
   this.A408OrgaoRegistroUltimoResponsavel = 0 ;
   this.AV26Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e120w2_client": ["'FECHAR'", true] ,"e130w2_client": ["AFTER TRN", true] ,"e140w43_client": ["ENTER", true] ,"e150w43_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV25EmpresaOrgaoRegistroEmpresaId',fld:'vEMPRESAORGAOREGISTROEMPRESAID',hsh:true},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV25EmpresaOrgaoRegistroEmpresaId", "vEMPRESAORGAOREGISTROEMPRESAID", 0, "char");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV29OrgaoRegistroCadastroJunta", "vORGAOREGISTROCADASTROJUNTA", 0, "svchar");
   this.setVCMap("A402OrgaoRegistroQuantidadeRespons", "ORGAOREGISTROQUANTIDADERESPONS", 0, "int");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A408OrgaoRegistroUltimoResponsavel", "ORGAOREGISTROULTIMORESPONSAVEL", 0, "int");
   this.setVCMap("AV33Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV9Erro", "vERRO", 0, "int");
   this.InitStandaloneVars( );
   this.LvlOlds[ 43 ]= ["O408OrgaoRegistroUltimoResponsavel","O402OrgaoRegistroQuantidadeRespons","O403OrgaoRegistroNIRE","O401OrgaoRegistroDataCadastroJunta","O400OrgaoRegistroCadastroJunta","O399OrgaoRegistroInscEstadual"] ;
   this.LvlOlds[ 44 ]= ["O407ResponsavelCPF","O406ResponsavelCRC","O405ResponsavelCargo","O404ResponsavelNome"] ;
});
gx.setParentObj(new torgaoregistro());
